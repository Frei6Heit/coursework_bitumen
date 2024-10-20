const sql = require('mssql');

const config = {
    user: 'your_db_username',
    password: 'your_db_password',
    server: 'your_db_server_address', // например, 'localhost' или IP-адрес
    database: 'your_db_name',
    options: {
        encrypt: true, // Используйте это, если используется Azure
        trustServerCertificate: true // если сертификат не подписан
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
    sql, poolPromise
};
