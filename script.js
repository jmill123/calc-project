//FUNCTION DEFINITIONS
function operate() {
    let num3;

    if(currentOp === "+") {
        num3 = num1 + num2;
    }
    else if(currentOp === "-") {
        num3 = num1 - num2;
    }
    else if(currentOp === "/") {
        num3 = num1 / num2;
    }
    else if(currentOp === "*") {
        num3 = num1 * num2;
    }
    return num3;

}


function addToDisplay(char) {
screen.textContent = screen.textContent + " " + char;
}


function clearDisplay() {
    screen.textContent = '';
    num1 = undefined;
    num2 = undefined;
    currentOp = undefined;
}

// currently broken; doesn't delete num1, num2, clear
function backspace() {
    screen.textContent = screen.textContent.slice(0,-2);

    if (currentOp !== undefined && num2 !== undefined) {
        num2 = num2.toString().slice(0, -1);  // Remove last digit from num2
        if (num2 === "") num2 = undefined;  // If empty, reset to undefined
    } else if (currentOp !== undefined) {
        currentOp = undefined;  // Remove operator if no num2 exists yet
    } else if (num1 !== undefined) {
        num1 = num1.toString().slice(0, -1);  // Remove last digit from num1
        if (num1 === "") num1 = undefined;  // If empty, reset to undefined
    }
}

function updateNums(char) {
    if (currentOp === undefined) {
        if (num1 === undefined) {
            num1 = char.toString();
        } else {
            num1 += char.toString();
        }
        num1 = parseFloat(num1);
    } else {
        if (num2 === undefined) {
            num2 = char.toString();
        } else {
            num2 += char.toString();
        }
        num2 = parseFloat(num2);
    }
}

//RUNNING CODE

//Initialize Vars and Selectors
let num1;
let num2;
let currentOp;

const screen = document.querySelector(".screen");
const num0 = document.querySelector(".num0");
const num1_ = document.querySelector(".num1");
const num2_ = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const AC = document.querySelector(".AC");
const CE = document.querySelector(".CE");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const equals = document.querySelector(".equals");
const decimal = document.querySelector(".decimal");

//Event Listeners
num0.addEventListener("click", () => {addToDisplay("0");
    updateNums(0);
});
num1_.addEventListener("click", () => {addToDisplay("1");
    updateNums(1);
});
num2_.addEventListener("click", () => {addToDisplay("2");
    updateNums(2);
});
num3.addEventListener("click", () => {addToDisplay("3");
    updateNums(3);
});
num4.addEventListener("click", () => {addToDisplay("4");
    updateNums(4);
});
num5.addEventListener("click", () => {addToDisplay("5");
    updateNums(5);
});
num6.addEventListener("click", () => {addToDisplay("6");
    updateNums(6);
});
num7.addEventListener("click", () => {addToDisplay("7");
    updateNums(7);
});
num8.addEventListener("click", () => {addToDisplay("8");
    updateNums(8);
});
num9.addEventListener("click", () => {addToDisplay("9");
    updateNums(9);
});
// decimal.addEventListener("click", () => {addToDisplay(".");
    
// });
divide.addEventListener("click", () => {addToDisplay("÷");
    currentOp = "/";
});
multiply.addEventListener("click", () => {addToDisplay("×");
    currentOp = "*";
});
add.addEventListener("click", () => {addToDisplay("+");
    currentOp = "+";
});
subtract.addEventListener("click", () => {addToDisplay("−");
    currentOp = "-";
});
AC.addEventListener("click", () => {clearDisplay()});
CE.addEventListener("click", () => {backspace();});
equals.addEventListener("click", () => {
    let num3 = operate()
    addToDisplay(`= ${Math.floor(num3 * 1000)/1000}`);
});