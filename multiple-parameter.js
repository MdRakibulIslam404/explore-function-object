// add
function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(secondNumber, firstNumber);
console.log(result);

// multiply
function multiplyTowNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}
var total = multiplyTowNumbers(5, 100);
console.log("total after multiplication", total);

// minus
function minusTowNums(price1, price2) {
    var different = price2 - price1;
    return different;
}
var totalDifferent = minusTowNums(12, 20);
console.log(totalDifferent);

// division
function division2nums(numb1, numb2) {
    var divisionResult = numb1 / numb2;
    return divisionResult;
}
var numb1 = 100;
var numb2 = 31;
var divisionTotal = division2nums(numb1, numb2);
console.log(divisionTotal);
// console.log(parseFloat(divisionTotal.toFixed(2)));