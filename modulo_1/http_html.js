const { create } = require('domain')
const http = require('http')
const { createServer } = require('https')

const port = 3000

const server = http.createServer((req , res) => { 
    res.statusCode = 200
    res.setHeader("Content-type", "text/html")
    res.write("olá pessoal, esse é o meu primeiro programa")
})

server.listen(port , () => { 
    console.log(` Servidor rodando na porta ${port} `)
})