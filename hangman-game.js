 /*
 const words = ['phone','teacher','respect']; 
 const hints = ['use for audio talk','who give knowledge','we should _ elder'];
 const word = words[Math.floor(Math.random()* words.length)];
 
  for (let i = 0; i < words.length; i++){
    if(words[i] === word){
          console.log(`Your hint : ${hints[i]}`);//print the hint according to the word.
         }
  }
  const answer = [];
    const check=()=>{
       for (let chance=0 ; chance<=5; chance++){  
         // take a character from user with the prompt method   
         let guess=prompt('Enter your character');
        for(let j = 0 ; j < word.length; j++){   
        if(word[j] === guess){  //  check  the guessed character is in the word or not
                answer[j] = guess;
           }
         }
       if(answer=== word){   // condition to check that guess is right or wrong
         console.log("You win");
          return;
          }
       else
          console.log("please enter correct character");
  }
 }
 check();
console.log("you loss");

*/
const words = [
  { word: 'computer', hint: 'works on 0s and 1s' },
  { word: 'telescope', hint: 'shows things that are far away' }
];

const getRandomSelection = (from) => {
  let randomIndex = Math.floor(Math.random() * from.length);
  return from[randomIndex];
}

const startGame = () => {
  const { word, hint } = getRandomSelection(words);

  let lives = 10;
  let chosenCharsString = '';
  let indexArr = [];
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';

  while (lives !== 0) {
      const chosenChar = getRandomSelection(alphabets);

      if (chosenCharsString.includes(chosenChar)) {
          continue;
      }

      chosenCharsString += chosenChar;

      let charFound = false;
      for (let index in word) {
          if (word[index] === chosenChar) {
              indexArr.push(index);
              charFound = true;
          }
      };

      if (!charFound) {
          lives -= 1;
          continue;
      }

      if (indexArr.length === word.length) {
          console.log('Computer Won');
          break;
      }
  }

  if(lives === 0) {
      console.log('Computer Lost');
  }
}

startGame();