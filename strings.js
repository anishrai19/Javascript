const greeting = 'Hellooooooo';
const name = 'Sahil';

// ES => ECMAScript ===> Standard which JS follows.
// concatenation ==> merging/joining. +
// OLD WAY (ES5 & below)
let fullGreeting = greeting + " " + name; // Hellooooooo Sahil

// ES6 way (NEW WAY) --> PREFER THIS WAY
fullGreeting = `${greeting} ${name}`; // Hellooooooo Sahil

// properties:
// position   12345  ==> last position number is the length
const word = "chair"
// index      01234 ==> need index to access a particular character

word[4]; // accessing the 4th index in the variable word
word[5]; // does not throw error, gives back undefined.
word[0]; // c
word[-1]; // in JS negative indexes are not valid. will give back undefined.

// length property (NOT A METHOD, DO NOT INVOKE IT)
const length = word.length;
const len = "abcuydsgfkdkjsaifu".length;

// strings are IMMUTABLE. 
let company = "coditas";
company = "persistent"; // NOT WHAT IMMUTABILITY MEANS

company[0] = 'k'; // WILL NOT HAVE ANY EFFECT.

// methods
// replace, replaces a char/string by char/string
// will only replace the first occurence.
let companyCopy = company.replace('c', 'k');

// split
// it creates a new array from a string, based on a identifier/Delimiter

const friends = "Esha|Sahil|Jay|Tejal";
friends.split("|"); // ["Esha", "Sahil", "Jay", "Tejal"];





