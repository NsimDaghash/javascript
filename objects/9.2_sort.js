//.sort((a, b) => a - b);
/*
Instructions
Use the array of numbers below and answer the following 
questions:

1. Sort the array of numbers from descending to ascending 
order
2. Sort the array of numbers from descending to ascending 
order.
*/

const numbers = [1, -5, 666, 2, 400, 11];
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);
