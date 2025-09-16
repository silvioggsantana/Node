const inquirer = require("inquirer")

inquirer
    .prompt([
        {
            name: 'p1',
            message: 'qual a sua primeira nota?',
        }, 
        {
            name: 'p2',
            message: 'qual a sua segunda nota?',
        }
    ])
    .then((anwsers) => {
        console.log(`à media das suas notas são: ${ (parseInt(anwsers.p1) + parseInt(anwsers.p2)) / 2 }`)
    })
    .catch((err) => console.log(err))