# nodejs
Nodejs


var updateNote = (title, body) => {
    console.log('Updating note', title)
    
/*     if (getNote(title)){
        var updateNotes = []
        updateNotes.push(getNote(title))
        removeNote(title)
        updateNotes.push(addNote(title, body))
    } 
    return updateNotes
} */

    var notes = fetchNotes()
    var newNote = {
       title,
        body
    }
    var oldNote = notes.find((note) => notes.title === title)
    
    if (oldNote) {
        var indexOldNote = notes.findIndex((note) => notes.title === title)
        notes[indexOldNote] = newNote
        saveNotes(notes)
        var updateNotes = []
        updateNotes.push(oldNote)
        updateNotes.push(newNote)
        return updateNotes
    } 
}



    case 'update':
        console.log('Updating note')
        var noteUpdated = notes.updateNote(argvYargs.title, argvYargs.body)
        if (noteUpdated) {
            console.log('Note Updated')
            console.log('Original note:')
            notes.logNote(noteUpdated[0])
            console.log('New note:')
            notes.logNote(noteUpdated[1])
        } else {
            console.log('Note not found')
        }
        break;
