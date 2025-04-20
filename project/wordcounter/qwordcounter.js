const area = document.querySelector(".wordarea")
const btn = document.querySelector(".btn");
const out = document.querySelector(".word-counter-container span");

function word(){
    let wordcounter = area.value;
    
    let texrwithoutspace = wordcounter.replace(/\s+/g, "");
    let number = texrwithoutspace.length;
    out.innerHTML = number; 
}

btn.addEventListener('click', word);        