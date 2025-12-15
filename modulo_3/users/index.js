const express = require('express')
const path = require('path')
const app = express()
const port =  3000
const basePath = path.join(__dirname, 'templates')
const router = express.Router()

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

router.use(express.urlencoded({
    extended: true
}))

router.use(express.json())

router.use(checkauth)



    router.get('/', (req, res) => {
        res.sendFile(`${basePath}/index.html`)
    })


    router.get('/users/add', (req, res) => {
        res.sendFile(`${basePath}/userform.html`)

    })

    router.post('/users/save', (req, res) => {
        console.log(req.body)

        const name = req.body.text
        const age = req.body.idade

        console.log("O nome do usuário é: " + name)

        console.log("A idade do usuário é: " + age)
    })

    app.get('/users/:id', (req, res) => {

    const id = req.params.id

    console.log('estamos buscando pelo usuário ' + id)

    res.sendFile(`${basePath}/users.html`)
})
module.exports = router