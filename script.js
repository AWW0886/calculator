const calculator = document.querySelector('#calc-container');
const allButtons = document.querySelector("#all-buttons");
const numberButton = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');
const operatorButton = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
const deleteButton = calculator.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const inputDisplay = document.querySelector('.input');
const prevEquationDisplay = document.querySelector('.second-input');
const resultDisplay = calculator.querySelector('.result');

numberButton.forEach(elem => elem.addEventListener('click', e => {
    if (inputDisplay.textContent === '0' || inputDisplay.textContent === 'NaN') {
        inputDisplay.textContent = e.target.dataset.key;
    } else {
        inputDisplay.textContent = inputDisplay.textContent + e.target.dataset.key;
    };
}));

decimalButton.addEventListener('click', e => {
    console.log('Decimal!');
    if (inputDisplay.textContent === '0' || inputDisplay.textContent === 'NaN') {
        inputDisplay.textContent = e.target.dataset.key;
    } else {
        inputDisplay.textContent = inputDisplay.textContent + e.target.dataset.key;
    }
    decimalButton.disabled = true;
});

operatorButton.forEach(elem => elem.addEventListener('click', e => {
    console.log('Operator!');
    if (inputDisplay.textContent === '0' || inputDisplay.textContent === 'NaN') {
        inputDisplay.textContent = e.target.dataset.key;
    } else {
        inputDisplay.textContent = inputDisplay.textContent + e.target.dataset.key;
    };
    decimalButton.disabled = false;
    operatorButton.forEach(elem => {elem.disabled = true;
})}));

equalsButton.addEventListener('click', e => {
    console.log('Equals!');
    let equation = inputDisplay.textContent;
    console.log(equation);
    operatorButton.forEach(elem => {elem.disabled = false;
    });
    findOperands(equation);
});

function findOperands(equation) {
    equation = equation.split(' ');
    console.log(equation);
    let firstOperand = equation[0];
    console.log(firstOperand);
    let operator = equation[1];
    console.log(operator);
    let secondOperand = equation[2];
    console.log(secondOperand);
    operate(firstOperand, operator, secondOperand);
}

function operate(firstOperand, operator, secondOperand) {
    let a = parseFloat(firstOperand);
    let b = parseFloat(secondOperand);
    if (operator === '+') {
        resultDisplay.textContent = +(a + b).toFixed(3);
    }
    if (operator === '-') {
        resultDisplay.textContent = +(a - b).toFixed(3);
    }
    if (operator === 'x') {
        resultDisplay.textContent = +(a * b).toFixed(3);
    }
    if (operator === '/') {
        if (b === 0) {
            resultDisplay.textContent = 'Can\'t do!';
            return;
        } else {
            resultDisplay.textContent = +(a / b).toFixed(3);
        }
    }
    if (resultDisplay.textContent.length > 11) {
        resultDisplay.textContent = "Too long!";
        operatorButton.forEach(elem => {elem.disabled = true;
        });
        return;
    } else {
        console.log(resultDisplay.textContent);
        prevEquationDisplay.textContent = (inputDisplay.textContent) + ' = ';
        inputDisplay.textContent = resultDisplay.textContent;
    }
    console.log(resultDisplay.textContent.split(''));
    let tempDisplay = resultDisplay.textContent.split('');
    console.log(tempDisplay);
    checkDisplayDecimal(tempDisplay, '.');
}

allClear.addEventListener('click', e => {
    console.log('AC!');
    inputDisplay.textContent = '0';
    prevEquationDisplay.textContent = ' ';
    resultDisplay.textContent = ' ';
    operatorButton.forEach(elem => {elem.disabled = false;
    decimalButton.disabled = false;
    });
});

deleteButton.addEventListener('click', e => {
    console.log('DEL!');
    let slice;
    slice = inputDisplay.textContent.slice(-1);
    console.log(slice);
    if (slice === 'N') {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -3);
    }
    if (slice === '.') {
        decimalButton.disabled = false;
    }
    if (slice === ' ') {
        let tempEquation = inputDisplay.textContent.split('');
        console.log(tempEquation)
        getDecimalCount(tempEquation, '.');
        inputDisplay.textContent = tempEquation.join('');
        console.log(inputDisplay.textContent);
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -3);
        operatorButton.forEach(elem => {elem.disabled = false;    
    });
    } else {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -1)
    };
});

function getDecimalCount(tempEquation, value) {
    let count = tempEquation.filter((v) => (v === value)).length;
    console.log(count);
    if (count === 1) {
        decimalButton.disabled = true;
    }
}

function checkDisplayDecimal(tempDisplay, value) {
    let check = tempDisplay.filter((v) => (v === value)).length;
    console.log(check);
    if (check === 1) {
        decimalButton.disabled = true;
    }
}