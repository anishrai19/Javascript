//FACTORY function

function personFactory(name){
    return{
        talk(){
           return `hi  this is ${name}`
       }
      
    }
    }
    const me=personFactory("rahul")
    const you=personFactory("rajesh")
    const you1=personFactory("ramesh")
    me.talk()
    you.talk()
    you1.talk()
    
    
    // factory function for npM
    
    function fan(npm){
        return{
            check(){
                if(npm>200){
                    return 'whrrrrrrrrr'
                }
                else if(nom>160){
                    return 'whrrrr'
                }
                else
                    return 'whr'
                
            }
        }
    }
    

//async - await
const fun=new Promise((resolve,reject)=>{
    console.log("this is the first function")  
    let num=35
    if(num%2==0){
        resolve("even number")
    }
    else{
        reject("odd number ")
    }
})

const fun1=new Promise((resolve,reject)=>{
     console.log("this is second fuction")
    let num1=32
     if(num1%3==0){
        resolve("divisible by 3")}
        
    
})

const asyncAwait=async()=>{
    try{
        const h1=await fun
        console.log(h1)
        const h2=await fun1
        console.log(h2)
    }
    catch(error){
        console.log(error)
    }
   
}
asyncAwait()



//call back

const fun=()=>{
  return "hi this this anish kumar rai"
}
const fun1=()=>{
    return "hi this is manish kumar rai"
}

const obj={
    name:'anish',
    age: 23
}
const obj1={
    name:'manish',
    age:25
}

const check=(user,fu)=>{
   console.log(`hello ${user.name}`)
   const h1=fu()
   console.log(h1)
}
check(obj,fun)
check(obj1,fun1)

// another  example of callback

const h1={
    name:"admin",
    address:"varanasi"
}
const h2={
    name:"user1",
    address:"pune"
}
const h3={
    name:"user2",
    address:"delhi"
}

const fun1=()=>{
    return "this is admin block"
}
const fun2=()=>{
    return "this is user block"
}
 const login=(obj,fn)=>{

    const f1=fn()
     console.log(f1)
     console.log(`hiii..your name is ${obj.name} and you live in ${obj.address}`)
     
 }

 const fun=login(h1,fun1)
 const func=login(h2,fun2)
 const func1=login(h3,fun2)


 //closure
// find the SI value of bank
function interestCalculator(R) {

    // inner function
    return{ calculator(P, N) {
        return P * N * R / 100;
    } 
    }
}

let carLoanInterestCalculator = interestCalculator(8);
carLoanInterestCalculator.calculator(3000,5)


// closure is the function with its lexical scope 

function fun(){
   let x=10;
   let y=20;
   return{ add(){
      // let c=a+b;
       return x+y;
   } 
}
}

let value=fun()
value.add()


//map,filter,reduce

//MAP
arr=[2,3,45,6,7,8]
const fun=(arr)=>{
     return arr**2;
}
const h1=arr.map(fun);
console.log(h1)

//FILTER
arr=[
   {name:'anish',age:23,employeType:'SD'},
   {name:'manish',age:34,employeType:'SD'},
   {name:'rahul',age:25,employeType:'ASD'}
]
const h2=arr.filter((value)=>{return value.age<30}) //it give a new array to store modified element
console.log(h2);


//EVEN and ODD number from a array 

const arr=[2,5,7,9,0,7,6,5,4]
const h3=arr.filter((value)=>{return value%2})
console.log(h3);

//filter using function calling

const arr=[4,5,67,4,7,8,9,7]
const fun=(ar)=>{
  return ar%2==0
}
const h3=arr.filter(fun)
console.log(h3)


//REDUCE

//sumof array
 const arr=[3,5,7,8,5,4,3,2,6]
 const h4=arr.reduce((acc,curr)=>{
     return acc+curr
 },0);
 console.log(h4);

 //average

 const arr=[10,6,8,4,8]
 const h5=arr.reduce((acc,curr)=>{
     return (acc+curr)
 },0)
 console.log(h5/arr.length)

 // combo of map and filter

 const users=[
    { firstName:'Anish',lastName:'Rai',age:23},
    { firstName:'Rahul',lastName:'gupta',age:32},
    {firstName:'Harsh',lastName:'Kumar',age:24},
    {firstName:'Manish',lastName:'Rai',age:26},
    {firstName:'Amar',lastName:'yadav',age:24},
];

const result=users.filter((value)=>value.age<25).map((value)=>value.firstName +" "+value.lastName)
console.log(result)

// use of reduce in this program

const output=users.reduce((acc,curr)=>{
    if(curr.age<25)
    {
        acc.push(curr.firstName+" "+curr.lastName)
    }
    return acc
},[])
console.log(output)

// setTimeout and setInterval


const intervalId = setInterval(() => {
    console.log('1s passed');
}, 1000);

setTimeout(() => {
    // clear the interval with intervalId
    clearInterval(intervalId);
}, 9000);


// another example

    

 const fun=()=>{
    console.log("hi this is fun block")
    const interval =setInterval(()=>{
        console.log('i am from varanasi')
    },1000)

    
    setTimeout(()=>{
        console.log('hello anish')
        clearInterval(interval)
    },2000)
}
 
const command= ()=>{
    const h1=  fun()
    console.log(h1)

}
command();

// Async await are mostly use with promise

const fun= new Promise((resolve,reject)=>{
       console.log("this is begnning of the program")
       
     setTimeout(()=>{
        resolve("hi..this is a setinterval block")
        reject("it is an error message")
    },1000)
})

const fun1= new Promise((resolve,reject)=>{
    console.log("hiiiiiiii")
    resolve("hi this is fun1 ")
    
})

const check= async()=>{
    try{
        const h1=await fun
        console.log(h1)
        const h2=await fun1
        console.log(h2)
    }
    catch(error)
    {
        console.log(error)
    }
}
check()
console.log("work done")