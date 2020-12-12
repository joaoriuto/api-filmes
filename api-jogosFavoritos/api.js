const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const jogosFavoritos = []

app.post('/api/jogos', (requisicao, resposta) => {
    const dados = requisicao.body
    try {
        if (!requisicao.body.nome || !requisicao.body.plataforma) {
            throw new Error('Campos inválidos')
        } else {
            jogosFavoritos.push(dados)
            resposta.send(JSON.stringify(dados))
        }        
    } catch (erro) {
        resposta.send(JSON.stringify({ mensagem: erro.message }))
    }

})

app.get('/api/jogos', (requisicao, resposta) => {
   resposta.send(JSON.stringify(jogosFavoritos))
})


app.listen(3000, () => console.log('Aguardando requisições na porta 3000'))