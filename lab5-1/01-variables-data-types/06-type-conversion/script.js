let amount = 0.00000000000000000000000000000000000000000001;
console.log(amount, typeof amount);

// Convert string to number
amount = parseInt(amount);
console.log(amount, typeof amount);

amount = +amount;
console.log(amount, typeof amount);

amount = Number(amount);
console.log(amount, typeof amount);

// Convert number to string
amount = amount.toString();
console.log(amount, typeof amount);

amount = String(amount);
console.log(amount, typeof amount);

// Convert string to decimal
amount = parseFloat(amount);
console.log(amount, typeof amount);

// Convert number to boolean
amount = Boolean(amount);
console.log(amount, typeof amount);

// Ways to get NaN (Not a number)
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);
console.log(amount, typeof amount);