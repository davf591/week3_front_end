


// const greetingStart = 'Hello';
// const name = 'Matti';
// const greeting = `${greetingStart}, my name is ${name}`;
// console.log(greeting);


// task 1
// let age = 4.5;
// const earthage = 'Earth is estimated to be ' + age + 'billion years old.';
// console.log(earthage);



// task 2
// const drinks = 4.99;
// const food = 6.65;
// const total = drinks + food;

// const result = `The total bill is ${total}. ${
//   total > 10
//     ? `Your card payment will be declined`
//     : `Your card payment will be accepted`
// }.

// Your card payment will be declined . because the total is bigger than 10.


//Task 2 /2

let age = 15;
let result = age >= 18 ? 'You are eligible to vote.' : 'You are not eligible to vote yet.';
console.log(result);
//Task 3 /1

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * 2);
});

// Task 3 /2 

let totalSales = 0;
const monthlySales = [1234, 2345, 3456, 4567, 5678];

monthlySales.forEach(function (value) {
  totalSales += value;
});

console.log('Total Sales are', totalSales);


// Task 3.2

// Loop through all sales numbers to add them to the total
// monthlySales.forEach(addToTotalSales);

// Often, developers using forEach will NOT declare the function separately; rather, they will put it right inside the call to forEach, as follows.
// monthlySales2.forEach(function (value) {
//   totalSales += value;
// });
