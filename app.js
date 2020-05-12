//modules and packages
const chalk = require('chalk')
const getNotes = require('./src/notes.js')
const print = console.log
//color coding for the console feedback
const succesMsg = chalk.green.bold
const errorMsg = chalk.redBright.bold
const warningMsg = chalk.yellowBright.bold

const msg = getNotes()
print(msg)

print(succesMsg('Succes!'))
print(warningMsg("Warning!"))
print(errorMsg("Error!"))

