// multiplication table(নামতা) of 13///////////////////////////////////////////////
function multiplicationTableOf13(number) {
    for (var i = 1; i <= 10; i++) {
        var index = i;
        var num = number;
        // var total = (number * i);
        var total = (index * num);
        // console.log(num, "X", index, "=", total);
    }
    // return total;
}

var result = multiplicationTableOf13(13);
// console.log(result);

// uppercase to lowercase////////////////////////////////////////////////////////
function upToLowercase(names) {
    var lowName = names;
    var name = lowName.toLowerCase();
    return name;
}
var myName = upToLowercase("ROkIB");
// console.log(myName);

// add string with function//////////////////////////////////////////////////
function fullName(first, last) {
    var full = first + " " + last;
    return full;
}
var first = "Md. Rakibul";
var last = "Islam";
var myFullName = fullName(first, last);
// console.log(myFullName);

// square number //////////////////////////////////////////////////////////////////////
function square(squareNumb) {
    var squareTotal = squareNumb * squareNumb;
    return squareTotal;
};
var squareNumbs = square(10);
// console.log(squareNumbs);


// obj > arr > element print //////////////////////////////////////////////////////
var pizza = {
    toppings: ["cheese", "sauce", "pepperoni"],
    crust: 'deep dish',
    serves: 2
}
// console.log(pizza.toppings[2]);