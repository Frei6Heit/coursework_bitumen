// вызов и обьявление библиотеки
const express = require('express');

// задача порта
const PORT = process.env.PORT || 3010;
const app = express();

// запрос на сервер
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
 
// получение данных из json файла
const todoItems = require('./todo-items.json');

// обработка данных
app.get('/api/todo-items', (req, res) => {
  res.json({ data: todoItems });
});

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});