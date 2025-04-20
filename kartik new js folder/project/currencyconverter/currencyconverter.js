    let inpa = document.querySelector(".currency");
    let select = document.querySelector(".select");
    let usa = document.querySelector(".usa");
    let japan = document.querySelector(".japan");
    let france = document.querySelector(".france");
    let kenya = document.querySelector(".kenya");
    let btn = document.querySelector(".btn");
    let para = document.querySelector(".out");

    function changer(){
        let valuea = Number(inpa.value);
        let selecta = select.value;

        if (selecta == "U.S.A"){
            let U = valuea* 86;
         para.innerHTML =  U;
        }else if(selecta == "Japan"){
            let ja = valuea * 0.62;
            para.innerHTML = ja;
        }else if(selecta == "France"){
            let fr = valuea * 1.1;
            para.innerHTML = fr;
        }else if(selecta == "Kenya"){
            let kn = valuea * 9.5;
            para.innerHTML = kn;
        }else {
            para.innerHTML = "Please select a valid country.";
        }
    
    }
    btn.addEventListener('click', changer);

    