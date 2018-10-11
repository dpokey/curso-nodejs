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
};

/*  -------------------------------------------  */

module.exports.addNotes = () => {
    console.log('addNotes');
    return 'New Note';
};

module.exports.add = (num1, num2) => {
    return num1 + num2;
};


