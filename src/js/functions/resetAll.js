import $ from ".";

export const resetAll = (firstNumber, secondNumber, operation) => {
    firstNumber = '';
    secondNumber = '';
    operation = '';
    $.textContent('display', '0')
    console.log(firstNumber)
}