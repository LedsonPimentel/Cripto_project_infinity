const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/coinGecko', async (req, res) => {
    const url = req.query.url;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados da API' });
    }
});

app.listen(port, () => {
    console.log(`Servidor de proxy rodando na porta ${port}`);
});
