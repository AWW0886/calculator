const calculator = document.querySelector('#calc-container');
const allButtons = document.querySelector("#all-buttons");
//const buttonContainer = document.querySelector('#button-container')
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
const deleteButton = calculator.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const inputDisplay = document.querySelector('.input');
const prevEquationDisplay = document.querySelector('.second-input');
const resultDisplay = calculator.querySelector('.result');

numberButton.forEach(elem => elem.addEventListener('click', e => {
//allButtons.addEventListener('click', e => {
    console.log('Number!');
    //if (!e.target.closest('button'))
    //    return;
    //console.log(e.target.textContent);
    //const key = e.target;
    //if (resultDisplay.textContent === secondInput.textContent) {
    //if (inputDisplay = equation) {
    //    secondInput.textContent = secondInput.textContent + e.target.dataset.key;
    //}
    if (inputDisplay.textContent === '0') {
        inputDisplay.textContent = e.target.dataset.key;
    } else {
        inputDisplay.textContent = inputDisplay.textContent + e.target.dataset.key;
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
        inputDisplay.textContent = e.target.dataset.key;
    } else {
        inputDisplay.textContent = inputDisplay.textContent + e.target.dataset.key;
    };
}));

equalsButton.addEventListener('click', e => {
    console.log('Equals!')
    let equation = inputDisplay.textContent;
    console.log(equation);
    findOperands(equation);
    //operate(firstOperand, operator, secondOperand);
});

function findOperands(equation) {
    equation = equation.split(' ');
    console.log(equation)
    let firstOperand = equation[0];
    console.log(firstOperand);
    let operator = equation[1];
    console.log(operator);
    let secondOperand = equation[2];
    console.log(secondOperand);
    operate(firstOperand, operator, secondOperand);
}
    //for (i = 0; i < 4; i++) {
        //while(equation.includes(operator[i])) {
    //        let operatorIndex = equation.findIndex(item => item === operator[i]);
            //firstOperand = equation[operatorIndex - 1];
            //console.log(firstOperand);
    //        secondOperand = equation[operatorIndex + 1];
    //        console.log(secondOperand);

function operate(firstOperand, operator, secondOperand) {
    let a = parseFloat(firstOperand);
    let b = parseFloat(secondOperand);
    if (operator === '+') {
        resultDisplay.textContent = +(a + b).toFixed(5);
    }
    if (operator === '-') {
        resultDisplay.textContent = +(a - b).toFixed(5);
    }
    if (operator === 'x') {
        resultDisplay.textContent = +(a * b).toFixed(5);
    }
    if (operator === '/') {
        if (b === 0) {
            resultDisplay.textContent = 'Can\'t do!';
        } else {
            resultDisplay.textContent = +(a / b).toFixed(5);
        }
    }
    if (resultDisplay.textContent.length > 14) {
        resultDisplay.textContent = "Result too long!";
    }
    console.log(resultDisplay.textContent);
    prevEquationDisplay.textContent = (inputDisplay.textContent) + ' = ';
    inputDisplay.textContent = resultDisplay.textContent;
    //console.log(typeof resultDisplay.textContent);
    //secondInput.textContent = resultDisplay.textContent;
    //console.log(typeof secondInput.textContent);
    //inputDisplay.textContent = resultDisplay.textContent;
    //console.log(inputDisplay.textContent);
    //return resultDisplay.textContent;
    //let equation = 0;
    //console.log(equation);
    //equation[0] = resultDisplay.textContent;
    //console.log(equation[0]);
    //let newequation = equation.splice(3, 0);
    //equation = equation.splice(0, 3, resultDisplay.textContent);
    //console.log(equation);
    //console.log(newequation);
    //equation = resultDisplay.textContent;
    //console.log(equation);
    //equation = equation.splice(0, 3, resultDisplay.textContent);
}
allClear.addEventListener('click', e => {
    console.log('AC!');
    inputDisplay.textContent = '0';
    prevEquationDisplay.textContent = ' ';
    resultDisplay.textContent = ' ';
})

deleteButton.addEventListener('click', e => {
    console.log('DEL!');
    let slice;
    slice = inputDisplay.textContent.slice(-1);
    console.log(slice);
    if (slice === ' ') {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -3)
    } else {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -1)
    }
})

//const add = (a, b) => a + b;

//const subtract = (a, b) => a - b;

//const multiply = (a, b) => a * b;

//const divide = (a, b) => a / b;