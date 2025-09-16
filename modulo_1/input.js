const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); 

readline.question( "qual o seu time de futebol: ", (time) => {
    console.log("eu torço para o " + time + "!")
    readline.close()
} )

