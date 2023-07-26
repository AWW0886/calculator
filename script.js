const calculator = document.querySelector('#calc-container');
const allButtons = document.querySelector("#all-buttons");
//const buttonContainer = document.querySelector('#button-container')
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
//const deleteButton = calculator.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const inputDisplay = document.querySelector('.input');
const resultDisplay = calculator.querySelector('.result');
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
    operate(equation);
})

function operate(equation) {
    equation = equation.split(' ');
    console.log(equation)
    //let operator = ['+', '-', 'x', '/'];
    const firstOperand = equation[0];
    console.log(firstOperand);
    const operator = equation[1];
    console.log(operator);
    const secondOperand = equation[2];

    //for (i = 0; i < 4; i++) {
        //while(equation.includes(operator[i])) {
    //        let operatorIndex = equation.findIndex(item => item === operator[i]);
            //firstOperand = equation[operatorIndex - 1];
            //console.log(firstOperand);
    //        secondOperand = equation[operatorIndex + 1];
            console.log(secondOperand);

    let a = parseFloat(firstOperand);
    let b = parseFloat(secondOperand);
    if (operator === '+') {
        resultDisplay.textContent = a + b;
    }
    if (operator === '-') {
        resultDisplay.textContent = a - b;
    }
    if (operator === 'x') {
        resultDisplay.textContent = a * b;
    }
    if (operator === '/') {
        if (b === 0) {
            resultDisplay.textContent = 'Can\'t do!';
        } else {
            resultDisplay.textContent = +(a / b).toFixed(5);
        }
    }
    if (resultDisplay.textContent > 9999999999999) {
        resultDisplay.textContent = "Result too large!";
    }
    console.log(resultDisplay.textContent);
}

//function operate(firstOperand, secondOperand) {
//    parseInt(firstOperand);
//    parseInt(secondOperand);
//    if (operator === '+') {
//        console.log(firstOperand + secondOperand);
//    } else {
//    console.log(typeof firstOperand)
//    console.log(typeof secondOperand)
//    }

//const add = (a, b) => a + b;

//const subtract = (a, b) => a - b;

//const multiply = (a, b) => a * b;

//const divide = (a, b) => a / b;