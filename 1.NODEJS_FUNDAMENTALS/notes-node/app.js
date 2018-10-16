

console.log('Iniciando app.js..');

//  Cargamos el modulo fileSystem y OS de node
//  Cargamos el modulo lodash de npm
//  Cargamos el modulo notes propio
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

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


console.log('\n--------------------------------------------\n');
//  pintamos los argumentos del objeto process de app.js
console.log(process.argv);

//  tomamos el argumento en la tercera pocicion
var command = process.argv[2];
//  evaluamos el argumento
console.log('Command :', command);

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
    case 'update':
        console.log('Updating note');
        break;
    default:
        console.log('Command not recognized');
}

console.log('\n--------------------------------------------\n');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}
//  process tambien tiene array argv en el objeto process{argv[]}
//  yargs tambien tiene obteto argv en el objeto yargs{argv{}}
const argvYargs = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOption
    })
    .command('remove', 'Remove a note', {
        title: titleOption
    })
    .help()
    .argv

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
        var allNotes = notes.getAll()
        console.log(`Printing ${allNotes.length} note(s):`)
        allNotes.forEach((note) => notes.logNote(note))
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
    case 'update':
        console.log('Updating note')
        var noteUpdated = notes.updateNote(argvYargs.title, argvYargs.body)
        if (noteUpdated) {
            console.log('Note Updated')
            notes.logNote(noteUpdated)
        } else {
            console.log('Note not updated')
        }
        break;
    default:
        console.log('Command not recognized')
}
