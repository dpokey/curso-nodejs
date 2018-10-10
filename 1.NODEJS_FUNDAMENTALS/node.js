/*  ---- NODEJS ----  */
/*
    Es un Runtine de Javascript que corre sobre el motor V8 el cual permite ejecutar JS fuera del navegador
    V8 Es un proceso que se ejecuta en background que convierte codigo JS en codigo maquina

    Permite que el IO sea NO bloqueante, permitiendo ejecutar tareas paralelas en un mismo hilo
    Permite la integracion con NPM (conjunto de codigo que puede ser rehusado)

*/

console.log('Hola mundo node');

/*  ---- Importar modulos de node ----  */
/*  ==================================  */
/*  
    require nos permite importar modulos propios de node 
    https://nodejs.org/api/

    OS          - permite obtener el nombre del usuario actualmente conectado
    FILE SYSTEM - permite crear nuevos archivos
*/
/*
    archivo app.js
    **************
*/
//  Cargamos el modulo fileSystem y OS de node
//  Las variables almacenan todo lo del modulo
const fs = require('fs');
const os = require('os');

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

/*  ---- Importar modulos propios ----  */
/*  ==================================  */
/*  
    Objeto Module  
    todos los archivos en node tienen integrados un objeto llamado module
    module tiene como propiedad un objeto exports {} que esta vacio
    exports puede ser usado para agregarle nuevas propiedades
    esas nuevas propiedades de exports pueden ser llamadas desde el mismo archivo
    o desde otros. en nuestro caso.

    El objetivo real de las exportaciones es exportar las funciones que se utilizan en el interior de la aplicacion
*/
/* 
    archivo notes.js
    ****************
    module {
        exports {}
    }
*/
console.log('Iniciando notes.js..');
module.exports.age = 25;

module.exports.addNotes = () => {
    console.log('addNotes');
    return 'New Note';
}

module.exports.add = (num1, num2) => {
    return num1 + num2;
}

/*
    module {
        exports {
            age: 25
            addNotes: () => {
                console.log('addNotes');
                return 'New Note';
            }
            add: (num1, num2) => {
                return num1 + num2;
            }
        }
    }
*/

/*
    archivo app.js
    **************
*/
//  Cargamos el modulo notes propio
const notes = require('./notes.js');
//  aqui ya puede ser llamada la propiedad age porque lo pusimo en el export
console.log(notes.age); // 25 
//  llamamos a la funcion addNotes y recibimos el resultado
var res = notes.addNotes();
console.log(res);
//  llamamos a la funcion add y le pasamos 2 parametros
console.log('Results :', notes.add(5, -7)); // Results : -2

//  agrega hello username tu tienes age al archivo (ES6)
fs.appendFile('greetings.txt', `Hello ${user.username}! Tu tienes ${notes.age}`, function (err) {
    if (err) {
        console.log('Imposible escribir en el archivo');
    }
});

/*  ---- Importar modulos de terceros mediante NPM y package.json ----  */
/*  ==================================================================  */
/*  
    package.son es el manifiesto de nuestra aplicacion
    contiene los modulos que van a ser cargados e instalados
    contiene usa serie de scripts que permitirar una ejecucion rapida de comandos en la consola

    para crear el package.json:
    1.ubicarse en el directorio de nuestro proyecto
    2.en consola: npm init
    3.indicar los parametros solicitados
    4.al finalizar se creara el archivo package.json

    para instalar un modulo de terceros de npm
    1.ubicarse en el directorio de nuestro proyecto
    2.en consola: npm i <nombre_modulo> --save
    3.el parametro i es para instalar
    4.el parametro --save es para actualizar el package.json e indicar la dependecia de este modulo
    5.al instalarse el modulo este vivira en la carpeta node_modules en su proyecto.

    La logica indica:
    primero va a buscar el modulo en los modulos centrales de node
    segundo va a buscar el modulo en la carpeta node_modules

    para copiar o mover un proyecto
    0.no es necesario copiar la carpeta node_package generada que contiene los modulos de terceros, ya que en el package.json ya se especifican las dependencias/modulos y sus versiones. esta carpeta puede ser eliminada o no considerada al momento de copiar/mover
    1.para generarla nuevamente ubicarse en el directorio de nuestro proyecto
    2.en consola: npm install
*/

/*
    archivo app.js
    **************
*/
//  Cargamos el modulo lodash de npm
const _ = require('lodash');
//  llamamos a la funcion isString de lodash que valida si es una cadena
console.log(_.isString(true)); // false
console.log(_.isString('Pierre')); // true

//  llamamos a la funcion uniq de lodash que elimina duplicados de una matriz 
var filteredArray = _.uniq(['Pierre', 1, 'Pierre', 1, 2, 3, 4]);
console.log(filteredArray); // ['Pierre', 1, 2, 3, 4]

/*  ---- Intalar nodemon ----  */
/*
    nodemon es una modulo de npm que permite ejecutar una aplicacion js y ante cualquier cambio en alguna de sus fuentes la aplicacion se reejecute automaticamente

    para instalar nodemon
    1.ubicarse en el directorio de nuestro proyecto
    2.en consola: npm i nodemon -g
    3.el parametro -g es para instalar de manera global. quiere decir que el modulo no se instala en el directorio del proyecto, sino de manera global en el directorio donde se encuentran los ejecutables de node y npm. esto permite que el comando pueda ser llamado desde cualquier lado.

    para ejecutar nodemon
    1.en consola: nodemon app.js

    para salir de nodemon
    2.en consola: CTRL + c
*/


