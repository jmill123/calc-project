//Function Definitions
function operate(currentOp) {
    if(currentOp === "+") {
        num3 = num1 + num2;
    }
    else if(currentOp === "-") {
        num3 = num1 - num2;
    }
    else if(currentOp === "/") {
        num3 = num1 / num2;
    }
    else if(currentOp === "X") {
        num3 = num1 * num2;
    }
    return num3;

}


function addToDisplay(char) {
screen.textContent = screen.textContent + " " + char;
}


function clearDisplay() {
    screen.textContent = '';
}

function backspace() {
    screen.textContent = screen.textContent.slice(0,-2);
}

//Initialize Vars and Selectors
let num1
let num2
let currentOp

const screen = document.querySelector(".screen");

//Running Code
