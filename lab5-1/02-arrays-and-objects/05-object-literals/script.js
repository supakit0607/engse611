for (let i = 1; i <= 5; i++) { 
    console.log(i); 
} 
console.log("Loop ended");


var j;
for (let j = 1; j <= 5; j++) { 
    console.log(j); 
} 
console.log("j = "+j);
console.log("Loop ended");

for (let i = 0, j = 100;
     i != j;
      i += 5, j -= 5) { 
    console.log("i = %d, j = %d", i, j); 
}
console.log("Loop ended");



let fruits = ["Apple", "Banana", "Orange", "Grape", "Lemon"]; 
console.log("List of fruits"); 
for (let i = 0; i < fruits.length; i++) { 
console.log("%d. %s", i + 1, fruits[i]); 
} 
let languages = ["GO", "JavaScript", "PHP", "Python", "Ruby"]; 
console.log("List of programming languages (reversed)"); 
let count = 1; 
for (let i = languages.length - 1; i >= 0; i--) { 
console.log("%d. %s", count, languages[i]); 
count++; 
}



let numbers = [30, 27, 84, 36, 24, 2, 74, 37, 8, 50]; 
let min = numbers[0]; 
let max = numbers[0]; 
let sum = 0; 
// Finding min and max 
for (let i = 1; i < numbers.length; i++) { 
if (numbers[i] < min) { 
min = numbers[i]; 
} 
if (numbers[i] > max) { 
max = numbers[i]; 
} 
} 
// Finding summation 
for (let i = 0; i < numbers.length; i++) { 
sum += numbers[i]; 
} 
console.log("Numbers: " + numbers.join(" ")); 
console.log("Min: " + min); 
console.log("Max: " + max); 
console.log("Sum: " + sum); 
console.log("Average: " + (sum / numbers.length));


let buffer = ""; 
let size = 8; 
for (let i = 1; i <= size; i++) { 
   for (let j = 1; j <= i; j++) { 
      buffer += j; 
   } 
   buffer += "\n"; 
} 
console.log(buffer);


let i = 1; 
while (i <= 10) { 
   console.log(i); 
   i++; 
} 
console.log("Loop ended");