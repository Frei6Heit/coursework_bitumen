// подключение express
import express from "express";
// подключаем модуль SOAP
import soap from "soap";
// создаем объект приложения
const app = express();

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
	// определяем в переменные URL адрес веб-сервиса 1С, переменные для авторизации, переменные для выполнения пользовательской функции
	let url = 'http://localhost:59000/exchange',
		args = {'RequestDATA':[{'PARAMETER': "VALUE"}]},
		auth = "Basic " + Buffer.from("LOGIN" + ":" + "PASSWORD").toString("base64");

	let client = soap.createClient(url, { wsdl_headers: { Authorization: auth } }, (err, client) => {
		client.setSecurity(new soap.BasicAuthSecurity("LOGIN","PASSWORD"))
		if (err) {
			throw err;
		} else {
			// обращаемся к нашей пользовательской функции GetSettings
			client.GetSettings(args, function(err, result) {
				// получаем данные и работаем с ними дальше
				console.log(result);
				return;
			});
		}
	});
	return;

});

const port = 3001;

// Запускаем сервер
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
