const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // Для обработки POST-запросов с JSON

// Подключение к базе данных PostgreSQL
const client = new Client({
  host: 'localhost',
  database: 'event_crm', // Имя вашей базы данных
  user: 'postgres',     // Ваш пользователь PostgreSQL
  password: '123456', // Ваш пароль PostgreSQL
});

client.connect()
  .then(() => console.log('Подключение к базе данных установлено'))
  .catch(err => console.error('Ошибка при подключении к базе данных', err));

// API маршрут для получения всех пользователей
app.get('/api/users', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

// API маршрут для регистрации нового пользователя
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await client.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, password]
    );
    res.json(result.rows[0]); // Возвращаем зарегистрированного пользователя
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при регистрации');
  }
});

// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
