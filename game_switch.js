const matrix = [
    ['X', 'O', 'O', 'O', 'O'], 
    ['O', 'O', 'O', 'O', 'O'], 
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
];
  const position = [0, 0];

  function game(move){
  const [row, column] = position;
  
  switch(move)
  {
    case 'moveLeft':
        if(position[1] === 0) return; 
        matrix[row][column - 1] = 'X';
        position[1] -= 1;
        break;

    case 'moveRight':
        if(position[1] === 4) return; 
          matrix[row][column + 1] = 'X';
          position[1] += 1; 
          break;
    case 'moveUp':
        if(position[0] === 0) return; 
         matrix[row - 1][column] = 'X';
         position[0] -= 1;   
         break;
    case 'moveDown':
        if(position[0] === 4) return; 
        matrix[row + 1][column] = 'X';
        position[0] += 1; 
        break;
    case 'display':
        for(let row of matrix) {
                console.log(row.join(" | "));
            }
         console.log('\n');
         break; 
    default:
        console.log("enter valid string");
    }
    matrix[row][column] = 'O';
}
game('moveRight');
game('moveDown');
game('moveDown');
game('moveRight');
game('display');
​
//OUTPUT
​
/* O | O | O | O | O
   O | O | O | O | O
   O | O | X | O | O
   O | O | O | O | O
   O | O | O | O | O
​
*/