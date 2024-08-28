const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 

const characters = require('./characters.json');

app.get('/characters', (req, res) => {
    res.json(characters);
});


app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
