import express from 'express';
import multer from 'multer';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Convert __dirname to use with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const OUTPUT_IMAGE_PATH = path.join(__dirname, 'generated_image.png');

// Middleware to handle JSON bodies
app.use(express.json()); // This will parse JSON request bodies

// Middleware to handle form-data (if needed)
const upload = multer(); // For processing multipart/form-data (if needed for file uploads)

// API for image generation
app.post('/generate', upload.none(), (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }

  // Python script for generating the image
  const pythonScript = `
import sys
from diffusers import StableDiffusionPipeline
from safetensors.torch import load_file
import torch
import os
from PIL import Image

# Get prompt and output path from arguments
prompt = sys.argv[1]
output_path = sys.argv[2]

base_model = "runwayml/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(base_model, torch_dtype=torch.float16)
pipe.to("cuda")

# Load LoRA model
lora_weights = "courseworkmodel.safetensors"
state_dict = load_file(lora_weights)

# Apply LoRA to the model
for key, value in state_dict.items():
    if key in pipe.unet.state_dict():
        pipe.unet.state_dict()[key].copy_(value)

# Generate the image
truncated_prompt = pipe.tokenizer(prompt, max_length=77, truncation=True)["input_ids"]
prompt = pipe.tokenizer.decode(truncated_prompt)

image = pipe(prompt).images[0]

# Save the image
output_dir = os.path.dirname(output_path)
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

image.save(output_path)
print(f"Image saved to {output_path}")
`;

  // Execute the Python script with the prompt and output path as arguments
  exec(
    `python -c "${pythonScript}" "${prompt}" "${OUTPUT_IMAGE_PATH}"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing Python script:', stderr || error);
        return res.status(500).json({ error: 'Failed to generate image.' });
      }

      console.log('Python stdout:', stdout);

      // Check if the image file exists
      fs.access(OUTPUT_IMAGE_PATH, fs.constants.F_OK, (err) => {
        if (err) {
          console.error('Image file does not exist:', OUTPUT_IMAGE_PATH);
          return res.status(500).json({ error: 'Image not generated.' });
        }

        // Send the image in the response
        res.download(OUTPUT_IMAGE_PATH, 'generated_image.png', (err) => {
          if (err) {
            console.error('Error sending file:', err);
            return res.status(500).send('Error sending the generated image.');
          }
        });
      });
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
