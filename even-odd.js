// --1

   
 function evenOdd(num){
        //   this.num=num
        if(num%2==0)
             console.log("Even number"+num);  
        else
            console.log("Odd number"+num)
     }
     const fun1=evenOdd(22);
     console.log(fun1);


 // --2

   
    function oddNumber(arr){
        let odd=arr.filter(n=>n%2!==0)
        console.log(odd)
   }
const arr=[2,3,4,5,7,8]
console.log(oddNumber(arr))

//--3

var computers=[
    {brand:"Dell",ram:8,processor:"i3"},
    {brand:"HP",ram:16,processor:"i7"},
    {brand:"Lenovo",ram:32,processor:"i5"}
] 
 var detail=computers.filter(function(computer){
 return computer.ram>8 })

console.log(detail)