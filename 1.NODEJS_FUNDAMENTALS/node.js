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



/*  ---- Manejo de Argumentos para la ejecucion de app.js ----  */
/* 
    Por linea de omenados se pueden pasar algumentos a la ejecucion de la app.js
    por ejemplo en nuestro caso
    1.en consola: node app.js <add|remove|list> 

    Los argumentos se almacenan en el objeto process{argv[]} de app.js
    -su primer argumento es el ejecutable de node
    -su segundo argumento el archivo app.js
    -su demas argumentos son los que ingresan

    [ 'C:\\Program Files\\nodejs\\node.exe',
      'D:\\GitHub\\nodejs\\1.NODEJS_FUNDAMENTALS\\notes-node\\app.js',
      'add' ]

    El problema con este metodo es cuando queremos agregar argumentos pares tipo 
    node app.js add --title="titulo de la nota"
    en este caso --title="titulo de la nota" todo se agregaria como un 4to argumento, donde tendriamos que trabajar la cadena y separar los valores de title y "titulo de la cadena"

    se podria optar por colocar node app.js add --title "titulo de la nota" y el "titulo de la nota" ya iria como 5to argumento, pero tambien es un trabajo adicional.
*/
/*
    archivo app.js
    **************
*/
//  pintamos los argumentos del objeto process de app.js
console.log(process.argv);

//  tomamos el argumento en la tercera pocicion
var command = process.argv[2];
console.log('Command :', command);
//  evaluamos el argumento
switch (command) {
    case 'add':
        console.log('Adding new note');
        break;
    case 'list':
        console.log('Listing all notes');
        break;
    case 'read':
        console.log('Reading note')
    case 'remove':
        console.log('Removing note');
        break;
    default:
        console.log('Command not recognized');
}

/*  ---- Manejo de Argumentos mediante yargs de npm ----  */
/* 
    Yargs es un modulo que permite trabajar de manera mas eficiente los argumentos
    Los argumentos se almacenan en el objeto yargs{argv{}} de app.js
    
    1.en consola: node app.js add encrypted --title="secrets"
    { _: [ 'add', 'encrypted' ], title: 'secrets', '$0': 'app.js' }

    en _ se almacenan los argumentos de complemento como add, encrypted
    por cada argumento de pares yargs agrega una nueva propiedad al objeto, lo que facilida su trabajo title: 'secrets'

*/
/*
    consola
    *******
    node app.js remove --title="secrets" --body="xxxx"
*/
/*
    archivo app.js
    **************
*/
//  process tambien tiene array argv en el objeto process{argv[]}
//  yargs tambien tiene obteto argv en el objeto yargs{argv{}}
const argvYargs = yargs.argv
const argvProcess = process.argv
//  pintamos en consola los objetos para ver la diferecnia entre ambos
console.log('Yargs :', argvYargs)
console.log('Process :', argvProcess)
//  tomamos el argumento en la primera pocicion
var command = argvYargs._[0]
console.log('Command :', command)
//  evaluamos el argumento
switch (command) {
    case 'add':
        console.log('Adding new note')
        //  llamamos al metodo addNote exportado por notes y usamos los argumentos del objeto yargs para trajar los argumentos de una mejor forma
        notes.addNote(argvYargs.title, argvYargs.body)
        break;
    case 'list':
        console.log('Listing all notes')
        notes.getAll()
        break;
    case 'read':
        console.log('Reading note')
        notes.getNote(argvYargs.title)
        break;
    case 'remove':
        console.log('Removing note')
        notes.removeNote(argvYargs.title)
        break;
    default:
        console.log('Command not recognized')
}
/*
    archivo notes.js
    ****************
*/
console.log('Iniciando notes.js..');

//  declaramos las funciones  
var addNote = (title, body) => {
    console.log('addNote', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Reading note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
}

// y las exportamos. en ES6 cuando nombrePropiedad = nombreValor se coloca directamoente solo nombrePropiedad
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}

/*  ---- JSON en Javascript ----  */
/*
    JSON es una notacion basada en JS que permite modificar representar un objeto como una cadena de texto, y esta pueda ser enviada entre servidores, almacenada y modificada

    JSON string es muy similar a un objeto de JS pero,
    nonmbre de sus atributos envuentos en comillas dobles
    valores de sus atributos envueltos en comillas dobles

    JSON.stringify(obj) permite convertir un objeto en un JSON string
    JSON.parse(string) permite convertir un JSON string en un objeto
*/
/*
    archivo playground/json.js
    **************************
*/

/*  ---- Convertimos un objeto en un string JSON ----  */

//  declaramos un objeto
var obj = {
    name: 'Pierre',
}
//  convertimos ese objeto en un JSON string y lo asignamos a una variable objString
var objString = JSON.stringify(obj)
//  validamos el tipo de la variable y la pintamos en la consola
console.log(typeof obj, obj) // object { name: 'Pierre' }
console.log(typeof objString, objString) // string {"name":"Pierre"}

/*  ---- Convertimos un string JSON en un objeto ----  */

//  declaramos un JSON string
var personString = '{"name": "Pierre", "age": 25}'
//  convertimos ese JSON string en un objeto y lo asignamos a una variable person
var person = JSON.parse(personString)
//  validamos el tipo de la variable y la pintamos en la consola
console.log(typeof personString, personString) // object { name: 'Pierre' }
console.log(typeof person, person) // string {"name":"Pierre"}

console.log('------------------------------------------')

const fs = require('fs')
//  definimos un objeto que va a representar la nota original
var originalNote = {
    title: 'Some title',
    body: 'Some body'
}
//  Convertimos el objeto (originalNote) en un JSON string (originalNoteString)
var originalNoteString = JSON.stringify(originalNote)
//  escribimos en un archivo notes.json ese JSON string (originalNoteString)
fs.writeFileSync('notes.json', originalNoteString)
//  leemos de ese archivo notes.json ese JSON string (originalNoteString)
noteString = fs.readFileSync('notes.json')
//  Convertimos ese JSON string (noteString) en un objeto (note)
var note = JSON.parse(noteString)

//  pintamos esa variable nota en consola
console.log(typeof note, note)

/*  ---- Manejo de Argumentos mediante yargs de npm ----  */
/*  ----              JSON en Javascript            ----  */
/*
    archivo app.js
    **************
*/
//  process tambien tiene array argv en el objeto process{argv[]}
//  yargs tambien tiene obteto argv en el objeto yargs{argv{}}
const argvYargs = yargs.argv
const argvProcess = process.argv
//  pintamos en consola los objetos para ver la diferecnia entre ambos
console.log('Yargs :', argvYargs)
console.log('Process :', argvProcess)
//  tomamos el argumento en la primera pocicion
var command = argvYargs._[0]
console.log('Command :', command)
//  evaluamos el argumento
switch (command) {
    case 'add':
        console.log('Adding new note')
        //  llamamos al metodo addNote exportado por notes y usamos los argumentos del objeto yargs para trajar los argumentos de una mejor forma
        var note = notes.addNote(argvYargs.title, argvYargs.body)
        if (note) {
            console.log('Note Created')
            notes.logNote(note)
        } else {
            console.log('Note title taken')
        }
        break;
    case 'list':
        console.log('Listing all notes')
        notes.getAll()
        break;
    case 'read':
        console.log('Reading note')
        var note = notes.getNote(argvYargs.title)
        if (note) {
            console.log('Note found')
            notes.logNote(note)
        } else {
            console.log('Note not found')
        }
        break;
    case 'remove':
        console.log('Removing note')
        var noteRemoved = notes.removeNote(argvYargs.title)
        var message = noteRemoved ? 'Note was removed' : 'Note not found'
        console.log(message)
        break;
    default:
        console.log('Command not recognized')
}
/*
    archivo notes.js
    ****************
*/
console.log('Iniciando notes.js..');

const fs = require('fs')

//  declaramos las funciones

var fetchNotes = () => {
    //  generamos una excepcion en caso no exista el archivo previamente o tiene informacion corrupta que no se pueda leer
    //  si hay un error en el codigo del bloque try, el catch capturara el error y no lo mostrara y seguira con la ejecucion mormal
    try {
        //  leemos la informacion del archivo json
        var notesString = fs.readFileSync('notes-data.json')
        //  definimos un nuevo vaalor a la matriz con la informacion que leemos del archivo
        return JSON.parse(notesString)
    } catch (e) {
        return []
    }
}

var saveNotes = (notes) => {
    //  escribimos la matriz en un archivo json como un JSON string
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}

var addNote = (title, body) => {
    console.log('addNote', title, body);
    //  cargamos la matriz que almacenara todas la notas
    var notes = fetchNotes()
    //  creamos el objeto que almacenara la nota que viene como argumento
    var note = {
        title,
        body
    }

    //  validamos si la nueva nota se duplica con las existentes (valida el title)
    //  almacenamos los duplicados en una nueva matriz
    //  filter llama a la funcion flecha por cada elemento de la matriz que recorre, es este caso notes
    //  si el valor de title de uno de los elementos de la matriz notes es igual al valor title que viene como argumento, filter se vuelve verdadero y ese valor duplicado se almacena en la matriz duplicateNotes 
    var duplicateNotes = notes.filter((note) => note.title === title)

    //  valimos la longitud de la matriz duplicateNotes
    if (duplicateNotes.length === 0) {
        //  agregamos la nota a la matriz
        notes.push(note)
        //  guardamos la matriz notes
        saveNotes(notes)
        //  devolvemos la nota, como este return solo va a suceder si enntramos al if, cuando no entremos al if
        //  ES6 devuelve undifined implicitamente cuando no hay un return explicito
        return note
    } 
    
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Reading note', title);
    //  cargamos la matriz que almacenara todas la notas
    var notes = fetchNotes()
    //  filtramos las notas que si son iguales a la que viene por argumento y la asignamos a una nueva matriz 
    var filteredNotes = notes.filter((note) => note.title === title)
    //  devolvemos la primera posicion de la nueva matriz, si no hay devulve undifined
    return filteredNotes[0]

};

var removeNote = (title) => {
    console.log('Removing note', title);
    //  cargamos la matriz que almacenara todas la notas
    var notes = fetchNotes()
    //  filtramos las notas que no son iguales a la que viene por argumento y la asignamos a una nueva matriz
    var filteredNotes = notes.filter((note) => note.title !== title)
    //  guardamos la matris  
    saveNotes(filteredNotes)
    //  validamos el tamaño de la matris original con la matris filtrada para comprobar si hubo eliminacion
    return notes.length != filteredNotes.length

}

var logNote = (note) => {
    console.log('==')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
} 

// y las exportamos. en ES6 cuando nombrePropiedad = nombreValor se coloca directamoente solo nombrePropiedad
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

/*  -------------------------------------------  */

module.exports.addNotes = () => {
    console.log('addNotes');
    return 'New Note';
};

module.exports.add = (num1, num2) => {
    return num1 + num2;
};

/*  ---- Debugging ----  */
/* 
    Para iniciar el modo depuracion, por consola:
    >node inspect archivo.js
    3 primeras linesas deben ser ingnoradas, indican que el depurador inicio con exito

    Al estar en modo debug, podemos por consola:
    lista las 10 primera slineas del codigo y muestra la funcion que se crea al iniciar todo archivo.js
    debug>list(10)
    saltamos a la siguiente instruccion de depuracion
    debug>n
    continuamos hasta el final
    debug>c

    para ver los valores de las variables en un momento dado en un breakpoint
    debug>repl
    en este nuevo modo de depuracion podemos consultar los valores de las variables
    >person
    
    para evitar unsa n por consola, en archivo se puede declara un punto de interrupcion
    debugger;

*/
/*  ---- Debugging con Google Chrome ----  */
/* 
    para jecutar el debugger en modo servicio en consola:
    >node --inspect-brk archivo.js

    en chrome
    chrome://inspect/
*/
/*  ---- Manejo de argumentos avanzados con YARGS ----  */
/* 
    
*/
/*  ---- Funciones Flechas ES6 ----  */
/* 
    
*/



