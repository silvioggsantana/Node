const fs = require('fs')

fs.stat( "arquivoNovo.txt" , function(err , stats) {
    if(err){
        console.log(err);
        return;
    }

    console.log(stats.isFile())
    console.log(stats.size)
    console.log(stats.ctime)
    console.log(stats.isDirectory())


})