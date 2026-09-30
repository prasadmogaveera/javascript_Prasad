const score= 100;
console.log(score);

const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);

console.log(balance.toFixed(2)); // E commerce application
const otherNumber = 123.123456789;
console.log(otherNumber.toPrecision(5));

const otherNumber2 = 123.123456789;
console.log(otherNumber2.toExponential(5));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// MAthS

// console.log(Math);

// console.log(Math.abs(-5));

// console.log(Math.round(4.4));

// console.log(Math.floor(4.9));

// console.log(Math.ceil(4.1));

// console.log(Math.min(0, 150, 30, 20, -8, -200));

// console.log(Math.max(0, 150, 30, 20, -8, -200));

console.log(Math.random()); // 0 to 1
console.log(Math.random() * 10); // 0 to 10
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10

const min =10;
const max= 20;
console.log(Math.random()*(max-min + 1)+min);