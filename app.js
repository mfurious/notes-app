//modules and packages
const chalk = require('chalk')
const getNotes = require('./src/notes.js')
const print = console.log
//color coding for the console feedback
const succesMsg = chalk.green.bold
const errorMsg = chalk.redBright.bold
const warningMsg = chalk.yellowBright.bold

let input = process.argv[2]
const msg = getNotes()
print(msg)

//Just a funny test script
if (input === "Mike") {
    print(succesMsg('Succes!'))
} else if (input === "Robin"){
    print(warningMsg("Warning!"))
} else {
    print(errorMsg("Error!"))
}
