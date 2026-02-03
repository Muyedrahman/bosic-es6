
// function declaration  

function add(num1, num2){
    return num1 + num2;
}
// functiion cxpression
const addition = function(num1 , num2){
    return num1 + num2;
}

// arrow function
const add2 = (num1, num2) => num1 + num2;
const multiply = (a,b) => a * b;
const sumAll = (a,b,c,d,e,f) => a+b+c+d+e+f;
const isFirstBig = (x,y) => x > y;

// multi line arrow function
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y*2;
    const result = makeDouble + againDouble;
    return result;
}
const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkEvenOdd(7));

const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map((n) => {
  const square = n * n;
  return square;
});

console.log(squaredNumbers);


const result = add2(17, 13);
// console.log(result)
const mult = multiply(7, 3);
// console.log(mult)
const tr = isFirstBig(7, 30);
console.log(tr)