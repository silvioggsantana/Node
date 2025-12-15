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

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(checkauth)



    app.get('/', (req, res) => {
        res.sendFile(`${basePath}/index.html`)
    })


app.listen(port, () => {
   console.log(`app rodando na porta ${port}`)
}) 


    app.get('/users/add', (req, res) => {
        res.sendFile(`${basePath}/userform.html`)

    })

    app.post('/users/save', (req, res) => {
        console.log(req.body)

        const name = req.body.text
        const age = req.body.idade

        console.log("O nome do usuário é: " + name)

        console.log("A idade do usuário é: " + age)
    })

