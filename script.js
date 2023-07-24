const calculator = document.querySelector('#calc-container');
const allButtons = document.querySelector("#all-buttons");
//const buttonContainer = document.querySelector('#button-container')
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
//const deleteButton = calculator.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const inputDisplay = document.querySelector('.input');
//const resultDisplay = calculator.querySelector('.result');
//const type = key.dataset.type

numberButton.forEach(elem => elem.addEventListener('click', e => {
//allButtons.addEventListener('click', e => {
    console.log('Number!');
    //if (!e.target.closest('button'))
    //    return;
    //console.log(e.target.textContent);
    //const key = e.target;
    if (inputDisplay.textContent === '0') {
        inputDisplay.textContent = e.target.textContent;
    } else {
        inputDisplay.textContent = inputDisplay.textContent + e.target.textContent;
    };
    //let firstOperand = inputDisplay.textContent;
    //console.log(firstOperand);
}));
//});

//if (key.classList.contains('operator')) {
//    console.log('An operator!');
//}

operatorButton.forEach(elem => elem.addEventListener('click', e => {
    console.log('Operator!');
    //let firstOperand = inputDisplay.textContent;
    //console.log(firstOperand);
    if (inputDisplay.textContent === '0') {
        inputDisplay.textContent = e.target.textContent;
    } else {
        inputDisplay.textContent = inputDisplay.textContent + e.target.textContent;
    };
}));

equalsButton.addEventListener('click', e => {
    console.log('Equals!')
    let equation = inputDisplay.textContent;
    console.log(equation);
    findOperands(equation);
})

function findOperands(equation) {
    equation = equation.split(' ');
    console.log(equation)
    //let operator = ['+', '-', 'x', '/'];
    let firstOperand = equation[0];
    console.log(firstOperand);
    let secondOperand = equation[2];

    //for (i = 0; i < 4; i++) {
        //while(equation.includes(operator[i])) {
    //        let operatorIndex = equation.findIndex(item => item === operator[i]);
            //firstOperand = equation[operatorIndex - 1];
            //console.log(firstOperand);
    //        secondOperand = equation[operatorIndex + 1];
            console.log(secondOperand);
        //}
    //}



}

//let a
//let b
//let c

//const add = (a, b) => a + b;

//const subtract = (a, b) => a - b;

//const multiply = (a, b) => a * b;

//const divide = (a, b) => a / b;