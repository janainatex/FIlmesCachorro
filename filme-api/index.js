const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'filme_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL conectado...');
});

// Rota para obter todos os filmes
app.get('/api/filmes', (req, res) => {
    const sql = 'SELECT * FROM filmes';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Rota para obter detalhes de um filme específico 
app.get('/api/filme/:id', (req, res) => {
    const sql = 'SELECT * FROM filmes WHERE filme_id = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) throw err;
        const filme = results[0];

        const sqlMusicas = 'SELECT * FROM cachorros WHERE filme_id = ?';
        db.query(sqlMusicas, [req.params.id], (err, cachorros) => {
            if (err) throw err;
            res.json({ ...filme, cachorros });
        });
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));