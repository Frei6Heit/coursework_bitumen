import soap from 'soap';

const url = 'http://localhost:80'; // Убедитесь, что это правильный URL
const args = {
    Логин: 'testUser',
    Пароль: 'testPassword',
    Почта: 'test@mail.com'
};

soap.createClient(url, (err, client) => {
    if (err) {
        console.error('Ошибка при создании клиента SOAP:', err);
        return;
    }

    client.ЗаписатьПользователя(args, (err, result) => {
        if (err) {
            console.error('Ошибка добавления пользователя:', err); // Подробно выводим ошибку
        } else {
            console.log('Результат:', result);
        }
    });
});
