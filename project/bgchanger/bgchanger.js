const body = document.querySelector('body');
const btn = document.querySelector(".btn");
const color = ['red', 'yellow', 'purple', 'pink', 'blue', 'green', 'brown'];


btn.addEventListener('click', () =>{
    const colorrandom = parseInt(Math.random()*color.length);
    body.style.backgroundColor= color[colorrandom];  
})