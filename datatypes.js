//the type of value store in a variable is data type.

//Number
//interger,float,double,negative.
const integer =10;
const decimal=10.5;
const negative=-10;

typeof integer;
console.log(typeof integer);
console.log(typeof decimal);
console.log(typeof negative);

//Strings
// character a-z,A-Z,Symbols,white spaces
//enclosed on "",''
const singleQuotedString='my name is anish';
const doubleQuotedString="ncownuw";

//Boolean
//false or true
const isClassToEarly=true;
const arePeopleMarried=false;

//undefined
const classRoom200=undefined;//never ever do this in real code.
//undefine is a value
//classRoom200 is a type undefine 


console.log(typeof classRoom200);
console.log(classRoom200);



//null
//type null is going to be object.
const nullVar=null;

console.log(typeof null);
console.log(nullVar);

//Arrays
// comma seperatede value /element enclose in []
//Heterogeneous by default
// array can store any type of data.

//Homogeneous
const numberOfStudentInClass =[2,56,4,3,24];
const favoriteSeries=["peaky","bhawkal","mirjapur","Harray Potter"];
// const [name,name,name,movie_name]=favoriteSeries;
const didStudy=[false,false,false,false,false];

//HETROGENIOUS

const person=["Anish",23,78374987983,false,undefine,null,["A","B","C"],function (){
    console.log("Hi")
}];

//Objects
//Key:value pairs.Seperated by commmas,enclose in{}
// Keys->identifier
//value ->value mapped to that identfier

const personObj={
    name: "Anish",
    age:23,
    number: 8858740460,
    hasBrain: false,
    friends:["A","B","C"],
    address: {
                
        city:"pune",
        country:"India"
    },
    greet: function (){
        console.log("Hi");
    }
}


//function

function add(num1,num2) {
    return num1+num2;
}