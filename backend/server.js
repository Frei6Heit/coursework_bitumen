import http from 'http';

const PORT = 100;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(); // Пустой ответ
});

server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
