function personFactory(name) {
  return {
    talk() {
      return `hi  this is ${name}`;
    },
  };
}
const me = personFactory("rahul");
const you = personFactory("rajesh");
const you1 = personFactory("ramesh");
me.talk();
you.talk();
you1.talk();

// factory function for npm

function fan(npm) {
  return {
    check() {
      if (npm > 200) {
        return "whrrrrrrrrr";
      } else if (nom > 160) {
        return "whrrrr";
      } else return "whr";
    },
  };
}

const fun = fan(210);
fun.check();

// even odd

function evenOdd(num) {
  return {
    check() {
      if (num % 2 == 0) return "even";
      else return "odd";
    },
  };
}

const value = evenOdd(6);
value.check();

// check prime number using factory function

function checkPrime(num) {
  return {
    check() {
      var count = 0;
      for (let i = 1; i < Math.sqrt(num); i++) {
        if (num % i == 0) {
          count++;
        }
      }
      if (count == 1) {
        return "prime number";
      } else return "not prime";
    },
  };
}
const fun = checkPrime(7);
fun.check();

//
function fun(num) {
  return {
    check() {
      if (num % 2) {
        return "odd";
      } else {
        return "even";
      }
    },
  };
}

const h1 = fun(4);
h1.check();

//fabonacii series

function fabona(num) {
  return {
    check() {
      let a = 0;
      let b = 1;
      console.log(a + " " + b);
      for (let i = 2; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
      }
    },
  };
}
const h2 = fabona(11);
h2.check();

//palindrom number

const checkPalindrome = () => {
    let num=121;
  let newNum = 0;
  let originalNum = num;
  while (num != 0) {
    let rem = num % 10;
    newNum = newNum * 10 + rem;
    num = num / 10;
  }
  if (newNum == originalNum) {
    console.log("palindrome number");
  } else {
    console.log("not palindrome number");
  }
};

// const num = 121;
checkPalindrome();


const checkPalindromeNumber=(string)=>{
 let array1=string.split('');
  let reverseString=array1.reverse();
  let joinReverse=reverseString.join('');
  console.log(joinReverse);


}

checkPalindromeNumber('ncnonroner')
