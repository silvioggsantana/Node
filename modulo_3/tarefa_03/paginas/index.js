const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname)

router.post('/index', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

router.post('/index2', (req, res) => {
    res.sendFile(`${basePath}/index2.html`)
})

module.exports = router