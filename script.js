//FUNCTION DEFINITIONS
function operate() {
    let num3;

    if(currentOp === "+") {
        num3 = +num1 + +num2;
    }
    else if(currentOp === "−") {
        num3 = num1 - num2;
    }
    else if(currentOp === "÷") {
        if(num2 == 0){
            num3 = "Your Mom"; }
        else {
        num3 = num1 / num2;
        }
    }
    else if(currentOp === "×") {
        num3 = num1 * num2;
    }
    return num3;

}

function operationPress(op) {
    currentOp = op;
 }

function updateDisplay(char) {
screen.textContent = char;
}


function clearDisplay() {
    num1 = 0;
    num2 = undefined;
    currentOp = undefined;
    equalsPressed = 0;
    screen.textContent = num1;
}

function resetOpButtons() {
    divide.style.backgroundColor = "#697565";
    multiply.style.backgroundColor = "#697565";
    add.style.backgroundColor = "#697565";
    subtract.style.backgroundColor = "#697565";
}

// // currently broken; doesn't delete num1, num2, clear
// function backspace() {};

function numberPress(num) {
    resetOpButtons();

    if (equalsPressed === 1) {
        num2 = undefined;
        equalsPressed = 0;
    }

    if (currentOp === undefined && num1?.toString().length <= 12) {
        if (num1 === 0) {
            num1 = num;
        } else {
            num1 = `${num1}${num}`;
        }
        updateDisplay(num1);
    } else if (currentOp !== undefined && (num2?.toString().length || 0) <= 12) {
        if (num2 === undefined || num2 === 0) {
            num2 = num;
        } else {
            num2 = `${num2}${num}`;
        }
        updateDisplay(num2);
    }
};

//RUNNING CODE

//Initialize Vars and Selectors
let num1 = 0;
let num2;
let num3;
let currentOp;
let equalsPressed = 0;

const screen = document.querySelector(".screen");
const num0 = document.querySelector(".num0");
const num1_ = document.querySelector(".num1");
const num2_ = document.querySelector(".num2");
const num3_ = document.querySelector(".num3");
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

screen.textContent = num1; // put 0 on screen at startup

//EVENT LISTENERS
//Screen
num0.addEventListener("click", () => {numberPress(0)});
num1_.addEventListener("click", () => {numberPress(1)});
num2_.addEventListener("click", () => {numberPress(2)});
num3_.addEventListener("click", () => {numberPress(3)});
num4.addEventListener("click", () => {numberPress(4)});
num5.addEventListener("click", () => {numberPress(5)});
num6.addEventListener("click", () => {numberPress(6)});
num7.addEventListener("click", () => {numberPress(7)});
num8.addEventListener("click", () => {numberPress(8)});
num9.addEventListener("click", () => {numberPress(9)});

//Keys


// decimal.addEventListener("click", () => {addToDisplay(".");});

divide.addEventListener("click", () => {operationPress("÷")
    resetOpButtons();
    divide.style.backgroundColor = "#a7b3a3";
});
multiply.addEventListener("click", () => {operationPress("×")
    resetOpButtons();
    multiply.style.backgroundColor = "#a7b3a3";
});
add.addEventListener("click", () => {operationPress("+")
    resetOpButtons();
    add.style.backgroundColor = "#a7b3a3";
});
subtract.addEventListener("click", () => {operationPress("−")
    resetOpButtons();
    subtract.style.backgroundColor = "#a7b3a3";
});
AC.addEventListener("click", () => {clearDisplay()});
CE.addEventListener("click", () => {backspace();});
equals.addEventListener("click", () => {
    if (num2 !== undefined) {
        num1 = operate();
        if (num1.toString().length <= 13) {
            updateDisplay(num1);
        }
        else {
            updateDisplay(num1.toExponential(7));
        };
        equalsPressed = 1;
    }
});
