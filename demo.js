const friends=['rahul','raj','vijay','rajesh'];
console.log(friends);

friends.push['raju'];


//destructuring

const animals=['lion','cat family','gujrat','india'];

const [spacies,catogry, state,country]=animals;
console.log(state); //gujrat

// clone

const anish=['24','varanasi','india'];

const manish=[...anish];

console.log(manish)

manish.push('rahul');


//FACTORY FUNCTION 

function evenNumber(num){
    return {
        number(){
            if(num%2==0)
              return 'even number';
              else{
                  return 'odd number'
              }
    }
}
}

const num=evenNumber(5);
num.number();

//async-await

const func=new Promise((resolve,reject)=>{
  let num=3;
    if(num%2==0){
        resolve("even number");
        console.log("hiiii....")
    }
    else{
        console.log("hi this is the else block")
        reject("odd number")
    }
})

const check= async()=>{

    try{
        const h1=await func;
        console.log(h1);
    }
    catch(error){
    
        console.log(error);
    }

}

check();



//Simple interset usinf factory function
function simpleInterest(P){
    return{
        rate(R,T){
            SI=(P*R*T)/100
            return SI
        }
    }
}

const s1=simpleInterest(1000);
s1.rate(10,1);

//call back

const admin=()=>{
    return "hii admin....welcome";
}
const user=()=>{
    return "hii user .....welcome to our page";
}

const adminDetail={
    name: "Anish Kumar Rai",
    age:32
}

const userDetail={
    name:"rahul",
    age:23
}

const check=(users,details)=>{

    const h1=users();
    console.log(h1);
    console.log(`your name is  ${details.name}  and your age is ${details.age}`);
    
}

check(admin,adminDetail);
check(user,userDetail);


//map

const arr=[3,5,7,89,9,90,3];
const h1=arr.map((arr)=>{
    return arr**2;
})
console.log(h1);

//filter

const arr=[3,4,5,7,8,9,10,40,20,60];
const h2=arr.filter((arr)=>{
    return  arr%2==0;   
})
console.log(h2);

//reduce

const arr=[2,4,6,7,8,3,10,20];
const h3=arr.reduce((first,last)=>{
    return first+last;
},0)
console.log(h3/arr.length);