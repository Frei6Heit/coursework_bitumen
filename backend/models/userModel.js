const { poolPromise } = require('../config/db');

async function createUser(username, email, hashedPassword) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('username', sql.NVarChar, username)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, hashedPassword)
            .query('INSERT INTO Users (Username, Email, Password) VALUES (@username, @email, @password)');
        return result;
    } catch (err) {
        console.error('SQL error', err);
        throw err;
    }
}

async function findUserByEmail(email) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE Email = @email');
        return result.recordset[0];
    } catch (err) {
        console.error('SQL error', err);
        throw err;
    }
}

module.exports = {
    createUser,
    findUserByEmail
};
