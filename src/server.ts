import express from 'express';


const app = express();
const port = 3333;


app.get('/', (req, res) => {
    return res.json({
        message: 'Olá NLW 05!'
    })
})

app.post('/', (req, res) => {
    return res.json({ message: "Usuário salvo com sucesso!" })
})

app.listen(port, () => console.log(`Server running on port ${port}`));