const fs = require("fs")
const chalk = require("chalk")

const readNotes = (title) => {
    const notes = loadNotes()
    const resultnote = notes.find((note) => note.title === title)
    if(!resultnote){
        console.log(chalk.bgRed("Sorry! No not found."))
    }else{
        console.log(chalk.bgBlue(`${resultnote.title} note is:`))
        console.log(resultnote.body)
    }
} 

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgBlue("New Note added!"))
    }
    else{
        console.log(chalk.bgRed("Note title taken!"))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>  {
    try{
        const dataBuffer = fs.readFileSync('Notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title!==title)

    // const notesToKeep = notes.filter(function(note){
    //     return note.title!==title
    // })
    saveNotes(notesToKeep)
    if(notesToKeep.length === notes.length){
        console.log(chalk.bgRed("Note not found!"))
    }
    else{
        console.log(chalk.bgGreen("Note removed!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.blue("Your Notes..."))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

module.exports = {
    readNotes: readNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}