const fs = require('fs')

console.log('inicio sincrono')

fs.writeFileSync('arquivo.txt' , 'oi');

console.log('fim sincrono')

console.log('inicio assincrono')

fs.writeFile('arquivo.txt' , 'oi' , function(err) {
    setTimeout(function() {
        console.log('arquivo criado')
    } , 1000 )
})

console.log('fim assincrono')