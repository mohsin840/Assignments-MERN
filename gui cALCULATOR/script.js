string = "";

// let display=document.getElementById('display').value;
buttons = document.querySelectorAll('button')
for (items of buttons) {
    items.addEventListener('click', (p) => {
        if (p.target.innerText === "=") {
            string = eval(string);
            document.getElementById('display').value = string;

        } else if (p.target.innerText === "C"){
            string='';
            document.getElementById('display').value = string;
        } 
        else {
            string = string + p.target.innerText;
            document.getElementById('display').value = string;
        }
    })
}
