// src/api/auth.js

export const registerUser = async (username, email, password) => {
    const response = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
  
    return response.json(); // Возвращаем данные ответа
  };
  