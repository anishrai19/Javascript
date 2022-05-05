// a named block code
// which can take n number argument/parameters
// and may or may not return something
// and is re usable and invokable

// traditional function
// function functionName(...parameterList) {
//     // function scope
//     ... code    
// }

function greet() {
    console.log('helloooooooo');
}

// to invoke function
// nameOfFunction(); // without () functions are NOT executed
// nameOfFunction; --> reference of the function

greet; // reference of greet
greet(); // invoke the function greet
// invoking -> to execute the block of the function "greet"


// non parameterized, non returning
// DOES NOT HAVE AN EXPLICIT RETURN STATEMENT
// js implicitly returns undefined
function printMessage() {
    console.log('i am freezing right now');
}

// parameterized, non returning
function printCustomMessage(message) {
    console.log(message);
}

printCustomMessage('please stop, its 1031');


// non parameterized, returning function
function getMessage() {
    return 'now, its 1032.. when is this going to end????';

    // return 
    // it sends back a value to the place the function was called from
    // STOP THE EXECUTION OF THE FUNCTION
    console.log('abcd');
}

const message = getMessage();
console.log(message);

// parameterized , returning function
function createMessage(name) {
    return `Hi there, ${name}`;
}

createMessage('Aniruddha');
