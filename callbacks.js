// what are callbacks?

const allTypesOfParameters = (number, string, boolean, array, object, fn) => {
    console.log(number);
    console.log(string);
    console.log(boolean);
    console.log(array);
    console.log(object);
    console.log(fn);
}

allTypesOfParameters(
    10, // value passed as parameter
    'abcdefg', // value passed as parameter
    false, // value passed as parameter
    [1, 2, 3, 4, 5], // reference passed as parameter
    { name: 'abcd', age: 20 }, // reference passed as parameter
    () => console.log('this is a callback function') // reference passed as parameter
);



// 2 users --> admin, regular

const getMenuForAdmin = () => {
    return `1. user management, 2. leave management, 3. logout`;
}

const getMenuForUser = () => {
    return `1. manage profile, 2. apply leave, 3. logout`;
}

const adminUser = {
    name: 'aniruddha',
    type: 'admin'
}

const regularUser = {
    name: 'Jay',
    type: 'regular'
}

const displayMenu = (user, fn) => {
    console.log(`menu for ${user.name}`);
    const menu = fn();
    console.log(menu);
}

// p1 => ...
// p2 => reference of the getMenuForAdmin fn [NOT CALLING THE FUNCTION]
displayMenu(adminUser, getMenuForAdmin);
displayMenu(regularUser, getMenuForUser);

// callbacks also play an important role 
// 1. array methods
// 2. asynchronous tasks


// our implementation of the map method

const map = (array, cb) => {
    const newArray = [];

    for(let element of array) {
        const modifiedElement = cb(element);
        newArray.push(modifiedElement)
    }

    return newArray;
}

const arr = [1, 2, 3, 4, 5];

const cubes = map(arr, n => n ** 3);