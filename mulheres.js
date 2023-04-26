const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simaria Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Dev e instrutora'
    },

    {
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_200_200/0/1563383651406?e=1687392000&v=beta&t=7MnF1oVzWyvwEdscYvb6rph2_OoOVH4vaxKfeAKwUb4',
        minibio: 'Fundadora da PrograMaria'
    },

    {
        nome: 'Daniela Barrêto',
        imagem: 'https://media.licdn.com/dms/image/D4D35AQHKYCAmBvdEyg/profile-framedphoto-shrink_200_200/0/1664755172060?e=1682730000&v=beta&t=KvJ52xWQeN45qGsRYwcEoVFDb7CXpSFiMSlVP-TIAxU',
        minibio: 'Estudante'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)