//Created and TLC by mfurious

//version 0.0.1
//This file contains presets which can be used for printing out styles for: error handling, user input e.a.
//Copyright Mike Mestebeld <m.mestebeld@outlook.com> (https://github/com/mfurious)
//chalk is under copyright (c) of Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
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