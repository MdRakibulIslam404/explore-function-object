function bringSingara(taka) {
    console.log("singara er jonno diche", taka);
    console.log("mama, singara den");
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 250;
var singara = bringSingara(money);
console.log("ei nen singara", singara);