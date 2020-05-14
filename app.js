//Core modules
const fs = require("fs")


//NPM Modules
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./src/notes.js')

// set yargs version
yargs.version('0.0.2')

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
    handler: function(argv){
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
    handler: function(argv){
<<<<<<< HEAD
        notes.removeNote(argv.title)
=======
        note.removeNote(argv.title)

>>>>>>> 8fb96aa41be3ee9fcf6daa0d9412ba575cb32200
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
    handler: function(argv){
        console.log(chalk.blueBright('Reading: ' + argv.title))
    }
})

//Create an list command
yargs.command({
    command: 'list',
    describe: 'Lists all excisting notes',
    handler: function(){
        console.log(chalk.blueBright('Listing all excisting notes...'))
    }
})

yargs.parse()