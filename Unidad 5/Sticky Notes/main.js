import {Note} from "./class.js";

var arrayNotes = new Array();

function notePrint(note){
    var divNote = document.createElement("div");
    var h1Note = document.createElement("h3");
    var pNote = document.createElement("p");
    var smallNote = document.createElement("small");

    h1Note.innerHTML = note.title;
    pNote.innerHTML = note.text;
    smallNote.innerHTML = note.date;

    divNote.append(h1Note);
    divNote.append(pNote);
    divNote.append(smallNote);

    return divNote;
}

function main(){
    var notes = document.getElementById("notes");

    arrayNotes.push(new Note("Kill them all", "Kill all furrones, otakons and kpopers."));
    arrayNotes.push(new Note("victorClown", "New emote, victorClown."));
    arrayNotes.push(new Note("Alejandro", "Se escribe con h, que no se te olvide HALEJANDRO."));

    for(let i = 0; i <= arrayNotes.length - 1; i++){
        notes.append(notePrint(arrayNotes[i]));  
    }
}

document.onload = main();

function createNote(){
    var newTitle = document.getElementById("title").value;
    var newText = document.getElementById("text").value;

    var notes = document.getElementById("notes");

    var newNote = new Note(newTitle, newText);

    arrayNotes.push(newNote);

    notes.append(notePrint(newNote));
}

document.getElementById("send").onclick = createNote;