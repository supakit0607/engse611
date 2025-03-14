let number =[];

number.push(10);
number.push(20);

console.log(number);

let languages = ["Ruby"];
languages.push("Python");
languages.push("JavaScript");

console.log(languages);

let mixedTypes = [10 , 3.14 , true, "JavaScript", new Date()];
console.log(mixedTypes);

let numbers = [10, 20, 30, 40, 50]; 
console.log("numbers[0]:", numbers[0]); 
console.log("numbers[1]:", numbers[1]); 
console.log("numbers[2] + numbers[3]:", numbers[2] + numbers[3]); 
console.log("numbers[4]:", numbers[4]); 
console.log("numbers[4]:", numbers[numbers.length - 1]);
console.log("numbers[5]:", numbers[numbers.length]);

let fruits = ["Apple", "Banana", "Orange"]; 
console.log(fruits); 
console.log("Length of fruits: ", fruits.length);
 
// Add two items to array 
fruits.push("Grape"); 
fruits.push("Tomato"); 
console.log(fruits); 
console.log("Length of fruits: ", fruits.length);
 
fruits.pop(); 
console.log(fruits); 
console.log("Length of fruits: ", fruits.length);


let numberss = [1, 2, 3, 4]; 
console.log("Before:", numberss); 
numberss.push(5); 
numberss.push(6); 
console.log("After push:", numberss); 
numberss.unshift(0); 
numberss.unshift(-1); 
console.log("After unshift:", numberss);
 
console.log("numberss[0]:", numberss[0]); 
console.log("numberss[2]:", numberss[2]);