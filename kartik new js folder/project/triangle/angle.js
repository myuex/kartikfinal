let findangle = document.querySelector(".findangle");
let btn = document.querySelector(".type");

let anglea = document.querySelector(".anglea");
let angleb = document.querySelector(".angleb");
let anglec = document.querySelector(".anglec");
let output = document.querySelector(".para");
let sum = document.querySelector(".sum")

let first = document.querySelector(".first");
let second = document.querySelector(".second");
let fid = document.querySelector(".find");
let out = document.querySelector(".out");
let mis = document.querySelector(".missing");

const dark = document.getElementById("dark");
const ligth = document.querySelector(".light");


function angletype() {
    let findI = Number(findangle.value);

    if (findI > 0 && findI < 90) {
        out.textContent = "Acute Angle";
    } else if (findI === 90) {
        out.textContent = "Right Angle";
    } else if (findI > 90 && findI < 180) {
        out.textContent = "Obtuse Angle";
    } else if (findI === 180) {
        out.textContent = "Straight Angle";
    } else {
        out.textContent = "Invalid angle. Please enter between 0° and 180°";
    }
};
btn.addEventListener('click', angletype);

function add(){
    let a = Number(anglea.value);
    let b = Number(angleb.value);
    let cccc = Number(anglec.value);
    let add = a+b+cccc;
    output.textContent = add; 
};

sum.addEventListener('click', add);

function find(){
    let fir = Number(first.value);
    let sec = Number(second.value);

    let findangle =  180 -fir - sec ;
    mis.textContent = findangle;
};

fid.addEventListener('click', find);


    function darklight(){
        document.body.style.backgroundColor = "black"; 
        document.querySelector('h1').style.color = "white";   
        document.querySelector('p').style.color = "white";  
        document.querySelector('h3').style.color = "white";  
        document.querySelector(".h3").style.color = "white";  
        document.querySelector(".h32").style.color = "white";  
        document.querySelector(".main").style.border = "2px solid white";
        document.querySelector(".out").style.color = 'white';  
        document.querySelector(".para").style.color = 'white'; 
        document.querySelector(".missing").style.color = 'white';
      
    }

    dark.addEventListener('click', darklight);

    function lighton(){
        document.body.style.backgroundColor = "white"; 
        document.querySelector('h1').style.color = "black";   
        document.querySelector('p').style.color = "black";  
        document.querySelector('h3').style.color = "black";  
        document.querySelector(".h3").style.color = "black";  
        document.querySelector(".h32").style.color = "black";  
    }

light.addEventListener('click', lighton);