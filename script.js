const calculator = document.querySelector('#calc-container');
const allButtons = document.querySelector("#all-buttons");
//const buttonContainer = document.querySelector('#button-container')
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
//const allClear = document.querySelector('.all-clear');
//const deleteButton = calculator.querySelector('.delete');
//const equalsButton = document.querySelector('.equals');
const inputDisplay = document.querySelector('.input');
//const resultDisplay = calculator.querySelector('.result');

numberButton.forEach(elem => elem.addEventListener('click', e => {
    console.log('Button works!');
    //if (!e.target.closest('button'))
    //    return;
    //console.log(e.target.textContent);
    inputDisplay.textContent = e.target.textContent;
    //const key = e.target;
    //console.log(key.textContent);
}));


//let a
//let b
//let c

//const add = (a, b) => a + b;

//const subtract = (a, b) => a - b;

//const multiply = (a, b) => a * b;

//const divide = (a, b) => a / b;

//function input() {
//    document.getElementByClass('input').value =
//    document.getElementByClass('button').value;
//}