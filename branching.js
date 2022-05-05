// if, else if else
// switch
// ternary

const hasInvite = false;
const isInviteNeeded = true;


// block --> {}
// NOT AN OBJECT
// if(<boolean>) {
//    // execute if boolean/condition is true
// }

// if can be a stand alone block/statement
// not mandatory to have an else block

if(isInviteNeeded) {
    if(hasInvite) {
        console.log('allowed in the party');
    }
 else {
    console.log('not allowed in the party');
}
}

// else if & else
// else if & else both cannot be standalone
// else if needs the if block
// multiple else ifs are allowed
// else needs either if or else if


const time = 9;

if(time < 6) {
    console.log('early early morning');
} else if (time <= 9) {
    console.log('early morning');
} else if (time < 12) {
    console.log('morning')
} else if (time === 12) {
    console.log('noon');
} else if (time < 16) {
    console.log('afternoon')
} else if (time < 20) {
    console.log('evening');
} else {
    console.log('night');
}

// WE WANT TO REDUCE/KEEP IN LIMIT the number of times we use if, else if, else

// switch 

const option = 'pikachu';

switch(option) {
    case 'pikachu': 
        console.log('ELECTRIC POKEMON');
        break; // it breaks out of the switch statement
    case 'charizard':
        console.log('FIRE/DRAGON POKEMON');
        break;
    case 'mewtwo':
        console.log("unknwon Pokemon");
        break;
    case 'venasaur':
        console.log('GRASS POKEMON');
        break;
    default:
        console.log('NO POKEMON SELECTED');
}


// ternary
// DO NOT USE TERNARY FOR COMPLEX CONDITIONS

const age = 10;

const message =  age > 18 ? "Allowed" : "Not Allowed";

let messageString = 'Not Allowed';
if(age > 18) {
    messageString = 'Allowed';
}
