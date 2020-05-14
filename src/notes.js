const fs = require('fs')
const chalk = require('chalk')

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
        console.log(chalk.red.inverse('this note is already taken'))
    }

    
} 

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    
    if (notes.length > notesToKeep.length) {
        console.log(chalk.greenBright.inverse("Note removed!"))
    } else {
        console.log(chalk.redBright.inverse("No notes found!"))
    }

    saveNotes(notesToKeep)
    
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
        console.log(chalk.green.inverse(`The note has been removed.`))
        saveNotes(notesToKeep)        	
    } else {
        console.log(chalk.red.inverse('No note has been found!'))
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
    removeNote: removeNote
}