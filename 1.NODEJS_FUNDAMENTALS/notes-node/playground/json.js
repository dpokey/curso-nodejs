
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


