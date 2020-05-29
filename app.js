const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes.js")

yargs.command({
    command : "add",
    describe : "Add a new note",
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command : "remove",
    describe : "Remove a note",
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command : "list",
    describe : "List notes",
    handler(argv){
        notes.listNotes()
    }
})
yargs.command({
    command : "read",
    describe : "Read note",
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)