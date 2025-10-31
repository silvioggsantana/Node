const express = require('express')
const app = express()
const port =  3001

app.get('/', (req, res) => {
    res.send('olá mundo!')
})

app.listen(port, () => {
   console.log(`app rodando na porta ${port}`)
})