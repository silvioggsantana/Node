const { create } = require('domain')
const http = require('http')
const { createServer } = require('https')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req , res) => { 

    const info = url.parse(req.url ,true )
    const name = info.query.name

    if(!name ){
    fs.readFile('escrevendo_arquivos.html' , function (err , data) { 
        res.writeHead(200 , { "content-type" : 'text/html'})
        res.write(data)
        return res.end()
    })
    }else{ 
        const nameNewLine = name + '\r\n'

        fs.appendFile('arquivo.txt', nameNewLine, function(err , data) {
            res.writeHead( 302 , {
                location: '/'
            })
            return res.end()
        } )
    }


})

server.listen(port , () => { 
    console.log(` Servidor rodando na porta ${port} `)
})