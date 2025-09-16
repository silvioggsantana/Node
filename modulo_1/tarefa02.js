const inquirer = require("inquirer")
const chalk = require("chalk")

try {
    inquirer.prompt([
    {
        name: 'nome',
        message: "qual o seu nome?"
    },
    {
        name: 'idade',
        message: "qual a sua idade?"
    }])
    .then((anwsers) => {
        console.log(chalk.bgYellow.black`a idade do usuario é ${anwsers.idade}, e o seu nome é nome ${anwsers.nome}`)
    })
} catch (error) {
    console.log(error)
}



