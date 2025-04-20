        let inp = document.querySelector(".inpt-1");
        let inpt2 = document.querySelector(".inpt-2");
        let add = document.querySelector(".add");
        let divi = document.querySelector(".divi");
        let multi = document.querySelector(".multi");
        let min = document.querySelector(".min");
        let btn = document.querySelector(".out");

        function addvalues(){
            let a = Number(inp.value);
            let b = Number(inpt2.value);
            let c = a + b;
            btn.innerText = c;
        }

        add.addEventListener('click', addvalues);


        
        function mulvalues(){
            let a = Number(inp.value);
            let b = Number(inpt2.value);
            let c = a * b;
            btn.innerText = c;
            c.style.color = 'white';
            
        }   

        multi.addEventListener('click', mulvalues);


        function divvalues(){
            let a = Number(inp.value);
            let b = Number(inpt2.value);
            let c = a / b;
            btn.innerText = c;
         
        }   

        divi.addEventListener('click', divvalues);

        
        function minvalues(){
            let a = Number(inp.value);
            let b = Number(inpt2.value);
            let c = a - b;
            btn.innerText = c;
        }   

        min.addEventListener('click', minvalues);


    

