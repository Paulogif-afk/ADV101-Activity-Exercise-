let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];

let evenAndGreaterThan20 = [];

let count = 0;


for (let number of numbers) {
    if (number % 2 === 0 && number > 20) {
        evenAndGreaterThan20.push(number); 
        count++; 
    }
}
 
console.log("Even numbers greater than 20:", evenAndGreaterThan20);
console.log("Count of even numbers greater than 20:", count);
