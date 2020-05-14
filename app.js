//Core modules
const fs = require("fs")


//NPM Modules
const yargs = require('yargs')
const notes = require('./src/notes.js')

// set yargs version
yargs.version('1.0.0')

//Create an add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            alias: 't',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            alias: 'b',
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create an remove command
yargs.command({
    command: 'remove',
    describe: 'Remove an excisting note',
    builder: {
        title: {
            alias: 't',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create an read command
yargs.command({
    command: 'read',
    describe: 'Reads an excisting note',
    builder: {
        title: {
            alias: 't',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//Create an list command
yargs.command({
    command: 'list',
    describe: 'Lists all excisting notes',
    handler(){
       notes.listNotes()
    }
})

yargs.parse()