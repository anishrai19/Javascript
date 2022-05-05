// what the hell is a closure????
// an inner function having access to the variables of the outer function
// when the inner is returned it causes a memory leak
// it causes js to not get rid of the newly created execution context


// outer function
const counter = () => {
    let count = 0;

    // inner function
    const incrementCounter = () => count += 1;

    return incrementCounter; // return reference of incrementCounter
    // MEMORY LEAK
}

const refToIncrementCounter = counter();

let currentCount = refToIncrementCounter();
currentCount = refToIncrementCounter();
currentCount = refToIncrementCounter();
currentCount = refToIncrementCounter();


// FACTORY FUNCTIONS
// outer function
const interestCalculator = (R) => {

    // inner function
    return{ calculator = (P, N) => {
        return P * N * R / 100;
    } 
    }
}

let carLoanInterestCalculator = interestCalculator(8);
carLoanInterestCalculator.calculator(3,5)
// new context
// which will have R = 8
// carLoanInterestCalculator will ALWAYS have 8 as R


let homeLoanInterstCalculator = interestCalculator(10);
// new context
// which will have R = 10
// carLoanInterestCalculator will ALWAYS have 10 as R

let personalLoanInterestCalculator = interestCalculator(12.5);
// new context
// which will have R = 12.5
// carLoanInterestCalculator will ALWAYS have 12.5 as R