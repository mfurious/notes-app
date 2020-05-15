//System modules
const fs = require('fs')
const sysmes = require('./sysmes')

//function to add notes
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
       saveNotes(notes)
        sysmes.acceptMessage('The Note has been added.')
    } else {
        sysmes.errorMessage('This note is already taken.')
    }
} 

//Function to remove notes
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

//Funtion to read notes
const readNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find(note => note.title === title)
    
    if (selectedNote) {
        sysmes.listHeader(selectedNote.title)
        sysmes.listBody(selectedNote.body)
    } else {
       sysmes.errorMessage("This node does not exist.")
    }  
}

//Function to list notes
const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        sysmes.listHeader(note.title)
    })
}

//Multi-use functions
//Function to load from array
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch (err) {
        return []
    }
}

//function to save to array
const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}