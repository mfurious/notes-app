const fs = require('fs')
const sysmes = require('./sysmes')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
       saveNotes(notes)
        sysmes.acceptMessage('The Note has been added')
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
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    if (notesToKeep < notes) {
        sysmes.acceptMessage(`The note has been removed.`)
        saveNotes(notesToKeep)        	
    } else {
        sysmes.errorMessage('No note has been found!')
    }

}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        sysmes.listHeader(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find(note => note.title === title)
    
    if (selectedNote) {
        sysmes.listHeader(selectedNote.title)
        sysmes.listBody(selectedNote.body)
    } else {
       sysmes.errorMessage("This node does not exist")
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
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}