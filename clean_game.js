/*
const matrix = [
    ['X', 'O', 'O', 'O', 'O'], 
    ['O', 'O', 'O', 'O', 'O'], 
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
];
  const position = [0, 0];

  const [row, column] = position;
  const pos=(row,column)=>{
      for(let i=0;i<5;i++){
      if(position[i][column])return;
      if(position[row][i])return;
  }
}
  function game(move){
 
  
  switch(move)
  {
    case 'moveLeft':
        pos(row,0);
        matrix[row][column - 1] = 'X';
        position[1] -= 1;
        break;

    case 'moveRight':
        pos(row,4); 
          matrix[row][column + 1] = 'X';
          position[1] += 1; 
          break;
    case 'moveUp':
        pos(0,column);
         matrix[row - 1][column] = 'X';
         position[0] -= 1;   
         break;
    case 'moveDown':
        pos(4,column);
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

//game('moveRight');
//game('moveDown');
game('moveLeft');
game('moveUp');





game('display');

*/

const matrix = [
    ['X', 'O', 'O', 'O', 'O'], 
    ['O', 'O', 'O', 'O', 'O'], 
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
];
  const position = [0, 0];
​  
  function pos(){
     let x=1;
     let y=0;
     let z=4;
     if(position[x] === y) return; 
        matrix[row][column - 1] = 'X';
        position[x] -= 1;
  }
  function game(move){
  const [row, column] = position;
  
  switch(move)
  {
    case 'moveLeft':
        
        break;
​
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