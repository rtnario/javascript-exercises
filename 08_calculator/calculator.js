const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  let sum = 0;

  for (number of numbers) {
    sum += number;
  }

  return sum;
};

const multiply = function(numbers) {
  let product = numbers[0];

  for (let i = 0; i < numbers.length - 1; i++) {
    product *= numbers[i + 1];
  }

  return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;

  let fact = 1;

  for (let i = 1; i < num; i++) {
    fact *= i + 1;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
