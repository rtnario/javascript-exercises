const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" ||
        typeof num2 !== "number" ||
        num1 < 0 ||
        num2 < 0) return "ERROR";

    let smallerNum = num1;
    let largerNum = num2;

    if (num1 > num2) {
        largerNum = num1;
        smallerNum = num2;
    }

    let sum = 0;

    for (let i = smallerNum; i <= largerNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
