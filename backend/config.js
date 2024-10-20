module.exports = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server', // например, 'localhost'
    database: 'your_database',
    options: {
      encrypt: true, // Используйте true, если вы подключаетесь к Azure
      trustServerCertificate: true // Измените при необходимости
    }
  };