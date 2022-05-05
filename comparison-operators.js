// it compares RHS with LHS and returns a boolean.
// == --> checks equality  (without datatypes) -- DONT USE THIS
// != --> checks inequalty (without datatypes) -- DONT USE THIS
// >  --> checks if LHS is greater than RHS
// >= --> checks if LHS is greater than or equal to RHS
// <  --> checks if LHS is less than RHS
// <= --> checks if LHS is less than or equal to RHS
// === --> checks equality (with datatypes) -- ALWAYS USE THIS
// !== --> checks inequality (with datatypes) -- ALWAYS USE THIS

7 == 7; // true
7 == 9; // false
7 == 8; // false
'7' == 7; // true
'seven' == 7; // false
'abcd' == 'abcd'; // true


7 != 7; // false
7 != 9; // true
7 != 8; // true
'7' != 7; // false
'seven' != 7; // true
'abcd' != 'abcd'; // false

7 > 7; // false
7 > 9; // false
7 > 8; // false
'7' > 7; // false
'9' > 7; // true
'seven' > 7; // false
'abcd' > 'abcd'; // false

7 >= 7; // true
7 >= 9; // false
7 >= 8; // false
'7' >= 7; // true
'9' >= 7; // true
'seven' >= 7; // false
'abcd' >= 'abcd'; // true


7 < 7; // false
7 < 9; // true
7 < 8; // true
'7' < 7; // false
'9' < 7; // false
'seven' < 7; // false
'abcd' < 'abcd'; // false

7 <= 7; // true
7 <= 9; // true
7 <= 8; // true
'7' <= 7; // true
'9' <= 7; // false
'seven' <= 7; // false
'abcd' <= 'abcd'; // true


7 === '7'; // false
7 === 7; // true

7 !== '7'; // true
7 !== 7; // false

// COMMON PITFALLS
// ARRAYS/OBJECTS/FUNCTIONS are always used with reference.

[] === []; // FALSE
[] == []; // FALSE
[1,2,3] === [1,2,3]; // FALSE
{} === {}; // FALSE
{} == {}; // FALSE
{name: "abcd"} === {name: "abcd"}; // FALSE

const arr1 = [];
const arr2 = arr1; // copy the reference of the arr1 array into arr2

arr1 === arr2; // TRUE



