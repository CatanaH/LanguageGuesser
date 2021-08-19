
const franc = require('franc');
const langs = require("langs");
const colors = require("colors");

const userInput = process.argv[2] //uses 2nd attribute given when file is run (node index.js 'Hola, cómo estás hoy')
const langCode = franc(userInput)

// const langCode = franc('Hola, cómo estás hoy');
// const langCode = franc('Salut ce mai faci astăzi');
// const langCode = franc('Hallo hoe gaan dit vandag met jou');
// const langCode = franc('こんにちは、今日はお元気ですか');
// const langCode = 'fuf'


const language = langs.where("3", langCode);
try {
    console.log(language.name.green)
} catch {
    console.log('ERROR! cannot read language type'.red)
}