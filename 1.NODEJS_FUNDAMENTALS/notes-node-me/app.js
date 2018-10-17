
const yargs = require('yargs')
const notes = require('./notes')

const titleOption = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOption = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

var argvYargs = yargs
    .command('add', 'Add a new note', {
        title: titleOption,
        body: bodyOption
    })
    .command('remove', 'Remove a note', {
        title: titleOption
    })
    .command('read', 'Read a note', {
        title: titleOption
    })
    .command('list', 'List all notes',)
    .help()
    .argv

var command = argvYargs._[0]

switch (command) {
    case 'add':
        var note = notes.addNote(argvYargs.title, argvYargs.body)
        if (note) {
            console.log ('Adding note')
            notes.logNote(note)
        } else {
            console.log('Note title taken')
        }
        break;
    case 'remove':
            var noteRemoved = notes.removeNote(argvYargs.title)
            var message = noteRemoved ? 'Note was removed' : 'Note not found'
            console.log(message)
        break;
    case 'read':
            var note = notes.readNote(argvYargs.title)
            if (note) {
                console.log('Not found')
                notes.logNote(note)
            } else {
                console.log('Note not found')
            }
        break;
    case 'list':
            var allNotes = notes.listNotes()
            console.log(`Printing ${allNotes.length} notes`)
            for (let note of allNotes) {
                notes.logNote(note)
            }
        break;
    default:
        console.log('Comando no reconocido')
        break;
}



