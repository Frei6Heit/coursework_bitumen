import axios from 'axios';

async function addUser(data) {
    try {
        const response = await axios.post('http:/localhost/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Response from 1C:', response.data);
    } catch (error) {
        console.error('Error adding user:', error.response ? error.response.data : error.message);
    }
}

const userData = {
    Логин: 'username',
    Пароль: 'password',
    Почта: 'email@example.com'
};

addUser(userData);
