console.log("Hello world!");

let name = "Danny";
console.log(name); // Output: Danny
let age = 63;
console.log(age); // Output: 63

let band = "Tool";
console.log(band);
let Instrument = "Drums";
console.log(Instrument);

let a = 46;
let b = 2;
let c = 24;

let sum = a + b;
let difference = c - b;
let quotient = a / b;
let product = b * c;
let isLessThan = c < a;
let isGreaterThan = b > a;

console.log(isLessThan); // Output: true - because the values for 'c' and 'a' satisfy the 'let' statement
console.log(isGreaterThan); // Output: false - because the 'let' statement is false for values 'b' and 'a'

console.log(product); //Output: 'b' multiplied by 'a'
//concatenation

let str1 = "Lorem";
let str2 = "ipsum";
let str3 = "dolor";
let str4 = "sit";

let newString = str1 + str2;
let newString2 = str1 + " " + str2 + " " + str3 + " " + str4;
console.log(newString);

//template literals
let concString = `${str1} ${str2}${","} ${str3} ${str4} ${"..."}`;
console.log(concString);

// typeof operator
let num = 52;
console.log(typeof num); //The output will be number

let finalBoolean = true;
console.log(`The type type of finalBoolean is ${typeof finalBoolean}`);

let finalFinalString;
console.log(finalFinalString);

let finalNum = null;
console.log(finalNum);

let d = 1;
let e = 2;
console.log(`the value of e is ${e}`);
console.log(`the value of d is ${d}`);
e = [d, (d = e)][0];
console.log(`the value of e is now ${e}`);
console.log(`the value of d is now ${d}`);
