var skyColor = "white";

var phones = ["iphone", "xiaomi", "samsung", "lg", "htc"];
phones[3] = "walton";

// check oppo element exists in an array
if (phones.indexOf("oppo") == -1) {
    // console.log("oops! oppo is missing");
}
if (phones.indexOf("samsung") != -1) {
    // console.log("samsung is exists");
}

// loop
var i = 1;
while (i <= 10) {
    // console.log(i);
    i++;
}

for (var i = 1; i < phones.length; i++) {
    var phone = phones[i];
    // console.log(phone);
}

// function
function nums3add(num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
};
var result = nums3add(10, 20, 30);
// console.log(result);

// Object
var pc = {
    brand: "hp",
    price: 56000,
    touchScreen: false,
}
// console.log(pc);

function n() {
    var u = 45 + 4;
    // console.log(u);
}
n();

function getReminder(number1, number2) {
    number1 % number2;
  }
  
  const reminder = getReminder(12, 2);
  
//   console.log(reminder);

  function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
   var result = addNumber(5, 4);
//    console.log(result);