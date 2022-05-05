//ARRAYS

//element /values (which can be of any datatype)
//elements/values (which can be of any datatype) 
// separated by commas
// enclosed in []

// POSITIONS     1        2          3       4      --> length
const brands = ['Apple', 'Samsung', 'Nike', 'Parle'];
// INDEX         0        1          2       3      --> IMP

const apple = brands[0]; // access the element at index 0

brands[0] = 'Banana'; // works!!!! how does it work????
// brands is an array, arrays are accessed by reference
// assume brands is pointing/referencing at mem location 1000
// brands under the hood has value 1000
// value at mem location 1000 -> ['Apple', 'Samsung', 'Nike', 'Parle']
// brands = []; (assume that [] is stored at mem location 2000)
// brands[0] = 'banana';  not changing the underlying mem reference
// 1000 -> ['Banana', 'Samsung', 'Nike', 'Parle']


// properties
const length = brands.length; // 4

// methods

const numbers = [100, 200, 300, 400, 500];

// adding elements in the array
// adding from the end/rear
// push
numbers.push(600); // [100, 200, 300, 400, 500, 600];

// adding from the start/front
// unshift
numbers.unshift(0); // [0, 100, 200, 300, 400, 500, 600];

// adding in the middle
// splice
// @params --> index, number of elements we want to delete (0), element we want to add
numbers.splice(3, 0, 250); // [0, 100, 200, 250, 300, 400, 500, 600];

// remove elements from the array
// remove and return from end
// pop
numbers.pop(); // 600
// [0, 100, 200, 250, 300, 400, 500]

// remove and return from the start
// shift
numbers.shift(); // 0
// [100, 200, 250, 300, 400, 500]

// remove from the middle
// splice
numbers.splice(2, 1); // [250]
// remove 1 element starting from index 2
// [100, 200, 300, 400, 500]


numbers.splice(2, 2); // remove 2 elements starting from index 2
// [100, 200, 500]

numbers.splice(1, 1, 300, 400, 500);
// start at index 1
// delete 1
// add 300, 400, 500 starting from index 1
// [100, 300, 400, 500, 500]


// map/filter/reduce/foreach --> vvi methods (callbacks needed)

// destructuring arrays (es6+)

const computer = ["Think Pad", "i7", "225GB SSD", "16GB RAM"];

// const brandName = computer[0];
// const processor = computer[1];
// const storage = computer[2];
// const ram = computer[3];

const [brandName, processor, storage, ram] = computer;
// creating constants which will get the value from computer
// based on the index they are specified


const [brandN, proc] = computer;

const [, , storageAmount, RAMCapacity] = computer;

// clone/copy arrays

const aniruddhaFriendList = ['Sahil', 'Anish', 'Vishnu', 'Venkat'];
// const srishtiFriendList = aniruddhaFriendList; 
// // COPYING THE REFERENCE OF aniruddhaFriendList INTO srishtiFriendList

// aniruddhaFriendList.push('Tejal');

// spread operator -->  ...
const srishtiFriendList = [...aniruddhaFriendList];
// let srishtiFriendList = []; // srishtiFriendList --> 2000
// srishtiFriendList = aniruddhaFriendList; //  overriding the reference to aniruddhaFrienList
// spreading out the elements of one array in a new array

aniruddhaFriendList.push('Tejal'); // DOES NOT AFFECT srishtiFriendList

// rest operator --> ...
const person = ["name", "surname", 28, { city: 'Pune' }, { contact: 987698432 }];
// [28,  { city: 'Pune' }, { contact: 987698432 }]

const [, , ...restOfArray] = person;
console.log(restOfArray);



string = "Abc_123_xyz_10_20";

array=string.split('_');
sum=0;
for(let i=0;i<array.length;i++)
{
    num=array[i];
    numInt=parseInt(num);

    if(numInt)
    {
       sum=sum+numInt;
    }
}

console.log(sum);