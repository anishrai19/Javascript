const num1=3;
const num2=4;

//addition +
num1+num2;
const addition=num1+num2;

//substraction

num2-num1;
const substraction=num2-num1;

//multiplication *
num1*num2;
const multiplication= num1*num2;

//division
num2/num1;
const division=num2/num1;

//modulo
num2%num1;
const remainder=num2%num1;

//Power **
const power =num1**num2;

//Method (In built function)

//parseing -> converting to int ->integer.
parseInt(8.9);// 8
parseInt(8.1); //8
parseInt("6.9");//6

parseFloat("7.9");//7.9

Math.round(4.5); //5
Math.round(4.4);//4

Math.floor(3.9); //3
Math.floor(3.1); //3

Math.ceil(3.2);//4
Math.ceil(3.9); //4

Math.random(); // a random number 0 & 1 (exclude 0 & 1)


console.log(5+Math.floor(Math.random()*5));

const randomNum= Math.floor(Math.random()*5);
console.log(randomNum);
