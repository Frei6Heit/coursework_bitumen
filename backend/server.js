const express = require('express');
const sql = require('mssql');
const config = require('./config');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM your_table`;
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при получении данных');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});