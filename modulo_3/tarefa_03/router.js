const express = require('express')
const path = require('path')
const app = express()
const port =  5000
const basePath = path.join(__dirname, 'templates')
const paginas = require("./paginas")

app.use('/paginas', paginas)

app.listen(port, () => {
   console.log(`app rodando na porta ${port}`)
})

