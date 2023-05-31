function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let firstQuantity = null;
let secondQuantity = null;
let operator = null;

function operate(operator, firstQuantity, secondQuantity) {
    if (operator == 'add') {
        return add(firstQuantity, secondQuantity);
    } else if (operator == 'subtract') {
        return subtract(firstQuantity, secondQuantity);
    } else if (operator == 'multiply') {
        return multiply(firstQuantity, secondQuantity);
    } else if (operator == 'divide') {
        return divide(firstQuantity, secondQuantity);
    }
}

console.log(operate('add', 10, 5));
console.log(operate('subtract', 10, 5));
console.log(operate('multiply', 10, 5));
console.log(operate('divide', 10, 5));