const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express()
const port = 3000

// Configurar o pool de conexão com o PostgreSQL
const pool = new Pool({
  host: 'postgres-app',
  port: 5432,
  database: 'todolist',
  user: 'todolistuser',
  password: 'todolistpassword',
});

app.use(bodyParser.json());
// Rota para listar todas as tarefas
app.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM tasks');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar tarefas.' });
    }
});

// Rota para adicionar uma nova tarefa
app.post('/', async (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ error: 'A descrição da tarefa é obrigatória.' });
    }

    try {
        const { rows } = await pool.query('INSERT INTO tasks (id, description, done) VALUES (DEFAULT, $1, false) RETURNING *', [description]);
        res.status(201).json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao adicionar tarefa.' });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
