const sumAll = function (num1, num2) {
  let min,
    max,
    sum = 0;

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }

  if (num1 < num2) {
    min = num1;
    max = num2;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  } else {
    min = num2;
    max = num1;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
