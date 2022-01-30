    var i = 0;

    while (i < 10) {
        // console.log(i);

        if (i == 5) {
            break;
        }
        i++;
    }

for (var i = 0; i < 20; i++) {
    // console.log(i);
    if (i > 8) {
        break;
    }
}

var numbers = [22, 26, 28, 33, 44, 55, 14, 99];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number > 55) {
        break;
    }
    // console.log(number);
}

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 40) {
        continue;
    }
    console.log(number);
}