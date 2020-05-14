//Created and TLC by mfurious
//https://github/com/mfurious
//version 0.0.1
//This file contains presets which can be used for printing out styles for: error handling, user input e.a.
const chalk = require('chalk')

//system notifications
const acceptMessage = (input) =>{ console.log(chalk.green.inverse(input))}
const warningMessage = (input) =>{ console.log(chalk.yellow.inverse(input))}
const errorMessage = (input) =>{ console.log(chalk.red.inverse(input))}

//Console headers, bodies ea.
const listHeader = (input) => { console.log(chalk.bold(input))}
const listBody = (input) => { console.log(chalk.italic(input))}


module.exports = {
    acceptMessage: acceptMessage,
    warningMessage: warningMessage,
    errorMessage: errorMessage,
    listHeader: listHeader,
    listBody: listBody,
}