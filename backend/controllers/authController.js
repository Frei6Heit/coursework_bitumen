const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Проверка, существует ли уже пользователь с таким email
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Пользователь с таким email уже существует.' });
        }

        // Хеширование пароля
        const hashedPassword = await bcrypt.hash(password, 10);

        // Создание нового пользователя в базе данных
        await createUser(username, email, hashedPassword);

        // Создание JWT токена
        const token = jwt.sign({ email }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(201).json({ message: 'Пользователь зарегистрирован.', token });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при регистрации.', error });
    }
};

module.exports = {
    register
};
