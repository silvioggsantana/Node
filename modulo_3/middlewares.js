const express = require('express')
const path = require('path')


const app = express()
const port =  3000
const basePath = path.join(__dirname, 'templates')

const checkauth = function(req,res,next){
    req.authStatus = true

    if(req.authStatus){
        console.log("está logado pode continuar")
        next()
    }else{
        console.log("faça o login")
        next()
    }
}

app.use(checkauth)

    app.get('/', (req, res) => {
        res.sendFile(`${basePath}/index.html`)
    })



app.listen(port, () => {
   console.log(`app rodando na porta ${port}`)
}) 
