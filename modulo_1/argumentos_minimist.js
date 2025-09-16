const minimist = require('minimist'); 
const soma = require('./modulo_interno').soma

const args = minimist(process.argv.slice(2))

console.log(args)

const a = args['a']
const b = args['b']

soma(a,b)
