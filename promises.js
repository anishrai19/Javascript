

// using conditional operator


let p= new Promise((resolve,reject) =>{
    setTimeout(()=>{
    let a=18;
    if(a>18){
        resolve('above 18 year ')
    }else{
        reject('less then 18 year')
    }
},1000);
});

p.then((message) => console.log('you are :'+message))

 .catch((message) => console.log('you are :'+message))

// let make code cleaner and readeable using promises

let age=true;
let height=false;
let  pro=new Promise((resolve,reject)=>{
    if(age){
        reject({
            name:'Anish Kumar Rai',
            age:'25'
        })
    }else if(height){
        reject({
            name:'Anish Kumar Rai',
             height:'5.10 feet'
        })
    }else{
        resolve("Welcome to Anish program")
    }
})
pro.then((message)=>{
      console.log(`Hiii..`+message)
}).catch((message)=>{
    if(age && height)
    {
        console.log(`Name:${message.name}, your age is ${message.age} and height is ${message.height}`)
    }
    else if(age){
    console.log(`Name:${message.name}, your age is ${message.age}`)
    }else if(height) {
         console.log(`Name:${message.name},and height is ${message.height}`)
    }
     
})




// use multiple then to hold the values

let age=true;
let height=false;
let  pro=new Promise((resolve,reject)=>{
    if(age){
        resolve({
            name:'Anish Kumar Rai',
            age:'25'
        })
    }else if(height){
        resolve({
            name:'Anish Kumar Rai',
             height:'5.10 feet'
        })
    }else{
        reject("Welcome to Anish program")
    }
})
pro
.then((message)=>
    console.log(`Name:${message.name}, your age is ${message.age}`))
.then((message)=>
    console.log(`Name:${message.name},and height is ${message.height}`))
.catch((error)=> 
    console.log('Hiii..'+error))



    //  multiple promises at prallel exection

    const videoOne=new Promise((resolve,reject)=>{
        resolve('first video')
    })
    const videoTwo=new Promise((resolve,reject)=>{
        resolve('second video')
    })
    const videoThird=new Promise((resolve,reject)=>{
        resolve('Third Video')
    })

    Promise.all([
        videoOne,
        videoTwo,
        videoThird
    ]).then((messages)=>{
      console.log(messages)
    })


    // Promise is use with the return statement in (then) and initialized new promise.

const work=new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("hello...hi")
    },1000)
})
const secWork=((resolve,reject)=>{
    setTimeout(()=>{
        resolve('first then return something')
    },3000)
})

work
.then((val)=>{
    console.log("first statement is :"+val)
    return new Promise(secWork)
      })
.then((val)=> console.log(val))

////promise in use of function

function fun(value1,value2){
    let name=value1
    let address=value2
    const h1=new Promise((resolve,reject)=>{
       if(name==true){
           resolve(" you are in age block")
       }
       else if(address==true){
           resolve(" you are in address block")
        }
        else{
            reject("this is error please check input")
        }
    })

h1.then((message)=> console.log(`hi my name is anish kumar rai and ${message}`))
  .catch((message)=> console.log(`this is an error message ${message}`))
}
  fun(true,false)