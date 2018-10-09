

/*  ---- NODEJS ----  */
/*
    Es un Runtine de Javascript que corre sobre el motor V8 el cual permite ejecutar JS fuera del navegador
    V8 Es un proceso que se ejecuta en background que convierte codigo JS en codigo maquina

    Permite que el IO sea NO bloqueante, permitiendo ejecutar tareas paralelas en un mismo hilo
    Permite la integracion con NPM (conjunto de codigo que puede ser rehusado)

*/

console.log('Hola mundo node');

/*  ---- Importar modulos REQUIRE ----  */
/*  
    Nos permite importar modulos propios de node 
    https://nodejs.org/api/

    OS          - permite obtener el nombre del usuario actualmente conectado
    FILE SYSTEM - permite crear nuevos archivos
*/

//  Cargamos el modulo fileSystem y OS
//  Las variables almacenan todo lo del modulo
const fs = require('fs');
const os = require('os');
const notes = require('./notes');

/*
    userInfo
    devuelve un objeto con la informacion del usuario
*/

//  lo asignamos a una variable user
var user = os.userInfo();

//console.log(user);

/*
    appendFile
    crea el archivo greeting.txt (si este ya existe agrega de nuevo hello world)
    agrega hello world al archivo
    si hay error, pinta en cosola
*/

fs.appendFile('greetings.txt', 'Hello World!', function (err) {
    if (err) {
        console.log('Imposible escribir en el archivo');
    }
});

//  agrega hello username al archivo
fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function (err) {
    if (err) {
        console.log('Imposible escribir en el archivo');
    }
});

//  agrega hello username al archivo (ES6)
fs.appendFile('greetings.txt', `Hello ${user.username}!`, function (err) {
    if (err) {
        console.log('Imposible escribir en el archivo');
    }
});

/*  ---- Objeto Module ----  */
/* 
    todos los archivos en node tienen integrados un objeto llamado module
    module tiene como propiedad un objeto exports {} que esta vacio
    exports puede ser usado para agregarle nuevas propiedades
    esas nuevas propiedades de exports pueden ser llamadas desde el mismo archivo
    o desde otros. en nuestro caso:
    
    archivo notes.js
    module {
        exports {}
    }

    module.exports.age = 25;

    module {
        exports {age: 25}
    }
    --------------------------------
    archivo app.js
    const notes = require('./notes.js');
    
    // aqui ya puede ser llamada la propiedad age porque lo pusimo en el export
    console.log(notes.age); 

    El objetivo real de las exportaciones es exportar las funciones que se utilizan en el interior de la aplicacion

*/
//  agrega hello username tu tienes age al archivo (ES6)
fs.appendFile('greetings.txt', `Hello ${user.username}! Tu tienes ${notes.age}`, function (err) {
    if (err) {
        console.log('Imposible escribir en el archivo');
    }
});