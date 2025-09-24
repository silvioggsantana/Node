const path = require('path');
const fs = require('fs')


//caminhos

const filepath = 'silvio/export/texto'
const arquivo = 'algumacoisa.pdf'


const finalpath = path.join( 'novoCaminho',  filepath , arquivo )

console.log(path.basename(finalpath))
console.log(path.dirname(finalpath))
console.log(path.extname(finalpath))



console.log(finalpath)

// criando pasta 

if(fs.existsSync('./minhapasta')){
    console.log('A pasta existe!')
}else {
    console.log("Não existe!")
    fs.mkdirSync('minhapasta')
}
