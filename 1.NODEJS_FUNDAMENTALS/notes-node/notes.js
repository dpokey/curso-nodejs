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
    //  cargamos la matriz que almacenara todas la notas
    return fetchNotes()
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

var updateNote = (title, body) => {
    console.log('Updating note', title)
    // crwamos un objeto de la nueva nota    
    var newNote = {
        title,
        body
    }
    // cargamos todas las notas
    var notes = fetchNotes()
    // buscamos si hay una nota con el mismo titulo y cargamos sus valores en oldNote
    var oldNote = notes.find((note) => note.title === title)
    // si existe
    if (oldNote) {
        // buscamos su indice en notas
        var indexOldNote = notes.findIndex((note) => note.title === title)
        // en esa misa posicion sobreescrbimos newNote
        notes[indexOldNote] = newNote
        // guardamos notas en el archivo
        saveNotes(notes)
        // creamos un array para almacenar oldNote y newNote
        var updateNotes = []
        updateNotes.push(oldNote)
        updateNotes.push(newNote)
        return updateNotes
    } 
}

var logNote = (note) => {
    debugger;
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
    updateNote,
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


