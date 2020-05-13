const fs = require('fs')

const getNotes = () => {
    return 'your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })

   saveNotes(notes)
} 

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
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
}