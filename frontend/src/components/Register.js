import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Используйте useNavigate для перенаправления

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3010/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                // Если регистрация успешна, перенаправьте на личный кабинет
                navigate('/dashboard'); // Измените '/dashboard' на путь к вашему личному кабинету
            } else {
                const errorData = await response.json();
                alert(errorData.message); // Покажите сообщение об ошибке
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при регистрации. Попробуйте еще раз.'); // Обработка ошибки
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Имя пользователя:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Пароль:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Register;
