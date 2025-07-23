
let a = ""; 
let display = document.getElementById("display");
let current = "";

function btn(value) {
    current += value;
    display.textContent = current;
}

function calculate() {
    if (current.trim() !== "") {
        let result = eval(current);  
        a += result.toString() + " "; 
        current = result.toString();  
        display.textContent = current;
        console.log("History: ", a); 
    }
}


function clearDisplay() {
    current = "";
    a = ""; 
    display.textContent = "0";
}
