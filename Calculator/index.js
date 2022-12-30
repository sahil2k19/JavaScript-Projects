let string =" "
let viewInput = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');
let cancel = document.querySelector('.cancel');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{

    })
})

cancel.addEventListener('click',(e)=>{
    string = " ";
    viewInput.value = string;
})

Array.from(buttons).forEach(
    (button)=>{
        button.addEventListener('click',(e)=>{
            if(e.target.innerHTML=='X'){
                e.target.innerHTML= '*'
            }
            if(e.target.innerHTML=='='){
                string = eval(string);
                viewInput.value = string;
                return;
            }
            
            let addString = e.target.innerHTML;
            string += addString;
            viewInput.value = string;
        })
    }
)