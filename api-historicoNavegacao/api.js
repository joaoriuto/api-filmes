const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const sitesAcessados = []

app.post('/api/sites', (requisicao, resposta) => {
    if (!requisicao.body.url || requisicao.body.dataDeAcesso) {
        resposta.status(400)
        resposta.send(JSON.stringify({ mensagem: 'Os campos de url e data não podem estar vazios.' }))
        resposta.end()
        return
    }
    const site = {
        url: requisicao.body.url,
        data: requisicao.body.dataDeAcesso
    }
    
    sitesAcessados.push(site)
    resposta.status(201)
    resposta.send(JSON.stringify(site))
})

app.get('/api/sites', (requisicao, resposta) => {
    resposta.send(JSON.stringify(sitesAcessados))
})

app.listen(3000, () => {
    console.log('API aguardando requisições na porta 3000.')
})