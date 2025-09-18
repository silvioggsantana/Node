const { create } = require('domain')
const http = require('http')
const { createServer } = require('https')

const port = 3000

const server = http.createServer((req , res) => { 
    res.write("olá mundo" )
    res.end()
})

server.listen(port , () => { 
    console.log(` Servidor rodando na porta ${port} `)
})