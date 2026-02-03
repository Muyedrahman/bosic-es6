const numbers = [87, 119,5, 91]
// console.log(numbers);
// console.log(...numbers);

// const max = Math.max(1121, 56, 94, 112, 514, 23);
const max = Math.max(...numbers)
// console.log(max);

const first = [1,2,3,4,5];
const second = [...first]
second.push(6);
console.log(first)
console.log(second);

const total = (a, b, c) => a + b + c;
const result = total(45, 65, 21)
const digits = [78, 55, 66]
total(...digits)