

console.log('Iniciando app.js..');

//  Cargamos el modulo fileSystem y OS de node
//  Cargamos el modulo lodash de npm
//  Cargamos el modulo notes propio
const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes');

//  llamamos a funciones de modulos de node
//  ------------------------------------------
var user = os.userInfo();
//  agrega hello username tu tienes age al archivo (ES6)
fs.appendFile('greetings.txt', `Hello ${user.username}! Tu tienes ${notes.age}`, function (err) {
    if (err) {
        console.log('Imposible escribir en el archivo');
    }
});

//  llamamos a funciones de modulos propios
//  ------------------------------------------
//  llamamos a la funcion addNotes y recibimos el resultado
var res = notes.addNotes();
console.log(res);
//  llamamos a la funcion add y le pasamos 2 parametros
console.log('Results :', notes.add(5, -7));


//  llamamos a funciones de modulos de terceron npm
//  ------------------------------------------
//  llamamos a la funcion isString de lodash que valida si es una cadena
console.log(_.isString(true));
console.log(_.isString('Pierre'));

//  llamamos a la funcion uniq de lodash que elimina duplicados de una matriz 
var filteredArray = _.uniq(['Pierre', 1, 'Pierre', 1, 2, 3, 4]);
console.log(filteredArray);
