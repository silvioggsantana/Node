const { create } = require('domain')
const http = require('http')
const { createServer } = require('https')
const url = require('url')

const port = 3000

const server = http.createServer((req , res) => { 
    const urlInfo = require('url').parse(req.url , true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader("Content-type", "text/html")
    res.write("olá pessoal, esse é o meu primeiro programa")

    if(!name){
        res.end(" <h1> preencha seu nome </h1> <form method=GET> <input type='text' name=name> </input> <input type='submit'/> </form>")
    }else{
         res.end(` <h1> Bem vindo ${name} </h1> `)
    }
})

server.listen(port , () => { 
    console.log(` Servidor rodando na porta ${port} `)
})