const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
mongoose.connection.once('open', () => {
    console.log('Conectado ao MongoDB');
});

// Definir modelo da tarefa
const Task = mongoose.model('Task', {
    description: String,
    completed: Boolean
});

// Configurar o middleware bodyParser
app.use(bodyParser.json());

// Rotas
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
});

app.post('/tasks', async (req, res) => {
    const { description, completed } = req.body;

    try {
        const newTask = new Task({ description, completed });
        await newTask.save();
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar tarefa' });
    }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
