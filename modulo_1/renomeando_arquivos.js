const fs = require('fs')


fs.rename('arquivo.txt', "arquivoNovo.txt" , function(err) {
    if(err){
        console.log(err);
        return;
    }

    console.log('arquivo renomeado!')


})