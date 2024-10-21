const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// Подключение к вашей базе данных
const { queryDatabase } = require('../db'); // Импорт функции для выполнения SQL-запросов

// Обработчик маршрута для регистрации пользователя
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Проверка входных данных
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Все поля обязательны для заполнения' });
  }

  // Хеширование пароля перед сохранением (для безопасности)
  const hashedPassword = await bcrypt.hash(password, 10);

  // SQL-запрос для вставки нового пользователя в таблицу пользователей 1С
  const query = `
    INSERT INTO Пользователи (Имя, Email, Пароль) 
    VALUES ('${username}', '${email}', '${hashedPassword}')
  `;

  try {
    await queryDatabase(query); // Выполнение SQL-запроса
    res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router; // Экспорт маршрута
