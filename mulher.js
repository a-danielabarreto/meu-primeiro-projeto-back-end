const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Daniela Barrêto",
        imagem: "https://avatars.githubusercontent.com/u/129341716?v=4",
        minibio: "Estudante de desenvolvimento backend"
    })
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)