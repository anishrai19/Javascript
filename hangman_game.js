play = function () {
    categories = [
        ["hull"],
        ["alien"],
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
 }
  const letter=()=>{
       play();
       var lifeCounter=5;
     
     for(let i=0;i<word.length;i++)
    {
        var guess=prompt('Enter your string');
       if(word.charAt(i)===guess.charAt[i])
           {
               letter();
                  
               }
      else{
            lifeCounter -=1;  
            console.log(lifeCounter);
             }
        
         if(lifeCounter<=0)
         {
           console.log("You loss");
           break;
         
         }
         if(word===guess)
         {
             console.log("you win");
         }
        else{
              console.log(" keep try ");
           }
 
     }
 
    }
letter();