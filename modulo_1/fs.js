const { create } = require('domain')
const http = require('http')
const { createServer } = require('https')
const fs = require('fs')

const port = 3000

const server = http.createServer((req , res) => { 
    fs.readFile('fs.html' , function (err , data) { 
        res.writeHead(200 , { "content-type" : 'text/html'})
        res.write(data)
        return res.end()
    })
})

server.listen(port , () => { 
    console.log(` Servidor rodando na porta ${port} `)
})