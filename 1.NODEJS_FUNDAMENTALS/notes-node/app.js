

console.log('Iniciando app.js..');

//  Cargamos el modulo fileSystem y OS
//  
const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var res = notes.addNotes();
console.log(res);

// var user = os.userInfo();

//  agrega hello username tu tienes age al archivo (ES6)
// fs.appendFile('greetings.txt', `Hello ${user.username}! Tu tienes ${notes.age}`, function (err) {
//     if (err) {
//         console.log('Imposible escribir en el archivo');
//     }
// });