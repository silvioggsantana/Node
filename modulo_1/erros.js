const x = 2; 

if(!Number.isInteger(x)){
    throw new Error("o número x é um número inteiro");
}

try {
    x = 2
} catch (error) {
    console.log(error)
}