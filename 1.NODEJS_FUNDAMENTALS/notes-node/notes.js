console.log('Iniciando notes.js..');

module.exports.age = 25;

module.exports.addNotes = () => {
    console.log('addNotes');
    return 'New Note';
}

module.exports.add = (num1, num2) => {
    return num1 + num2;
}
