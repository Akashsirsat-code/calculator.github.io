let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})


// code for contact section

var id = setTimeout(() => {
    document.getElementById("contactmenu").style.bottom = "-15px";
}, 2000);

setTimeout(() => {
    document.querySelector("body").style.background = "#34495E";
}, 4000);


document.getElementById("opan").onclick = () => {
    document.getElementById("contactmenu").style.bottom = "-15px";
}


document.getElementById("cut").onclick = () => {
    document.getElementById("contactmenu").style.bottom = "-1000px";
}