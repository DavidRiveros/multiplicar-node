const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        // if (!Number(base)) {
        //     reject('El valor introducido no es un número');
        //     return;
        // }

        let data = '';

        console.log('========================='.green);
        console.log(`==tabla de ${base}`.green);
        console.log('========================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
            //data += (`${base} * ${i} = ${base*i}\n`);
        }

        // fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
        //     if (err)
        //         reject(err)
        //     else
        //         resolve(`La tabla-${ base } ha sido grabada!`);
        // });

    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base*i}`);
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`La tabla ${base} x ${limite} ha sido grabada!`.green);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}