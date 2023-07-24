const calculator = document.querySelector('#calc-container');
const allButtons = document.querySelector("#all-buttons");
//const buttonContainer = document.querySelector('#button-container')
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
//const deleteButton = calculator.querySelector('.delete');
//const equalsButton = document.querySelector('.equals');
const inputDisplay = document.querySelector('.input');
//const resultDisplay = calculator.querySelector('.result');
//const type = key.dataset.type

numberButton.forEach(elem => elem.addEventListener('click', e => {
//allButtons.addEventListener('click', e => {
    console.log('Number!');
    //if (!e.target.closest('button'))
    //    return;
    //console.log(e.target.textContent);
    //const type = key.dataset.type
    if (inputDisplay.textContent === '0') {
        inputDisplay.textContent = e.target.textContent;
    } else {
        inputDisplay.textContent = inputDisplay.textContent + e.target.textContent;
    };
}));
//});

//if (key.data.type === 'operator') {
//    console.log('An operator!');
//}

operatorButton.forEach(elem => elem.addEventListener('click', e => {
    console.log('Operator!');
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