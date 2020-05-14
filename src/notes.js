const fs = require('fs')
const sysmes = require('./sysmes')

const getNotes = () => {
    return 'your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
       saveNotes(notes)
    } else {
        sysmes.errorMessage('this note is already taken')
    }
} 


const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    
    if (notesToKeep < notes) {
        sysmes.acceptMessage(`The note has been removed.`)
        saveNotes(notesToKeep)        	
    } else {
        sysmes.errorMessage('No note has been found!')
    }

}

const listNotes = () => {
    const notes = loadNotes()
    let i = 0
    while (i < notes.length){
        sysmes.listHeader(notes[i].title)
        sysmes.listBody(notes[i].body)
        i++
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.filter(function (note) {
        return note.title === title
    })

    if (selectedNote.length !== 0) {
        console.log(selectedNote)
    } else {
       sysmes.errorMessage("This node does noet exist")
    }
    
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch (err) {
        return []
    }


}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}