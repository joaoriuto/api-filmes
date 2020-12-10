const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api/filmes', (req, res) => {
    const filmes = [
        { nome: 'Matrix a trilogia' },
        { nome: 'Interestelar'},
        { nome: 'O núcleo' },
        { nome: 'Hackers' }
    ]

    res.send(JSON.stringify(filmes))
})

app.listen(3000, () => {
    console.log('API funcionando.')
})