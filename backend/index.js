import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Остальной код...

// API для регистрации
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Подготовка данных для отправки в 1С
  const data = {
    username,
    password,
  };

  try {
    // Запрос к серверу 1С для записи данных
    const response = await axios.post('http://1c-server-url/api/register', data, {
      auth: {
        username: '1c-user',   // логин к серверу 1С
        password: '1c-password' // пароль к серверу 1С
      },
    });

    // Проверка результата запроса к 1С
    if (response.status === 200) {
      res.json({ message: 'Регистрация успешна!' });
    } else {
      res.status(500).json({ error: 'Ошибка на стороне 1С' });
    }
  } catch (error) {
    console.error('Ошибка при отправке данных на 1С:', error.message);
    res.status(500).json({ error: 'Ошибка при подключении к 1С' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
