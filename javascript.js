/*computer picks one of 3 items randomly*/
let CPUitems=["rock","paper","scissors"];
let CPUpick;
function getComputerChoice() {
    CPUpick=CPUitems[Math.floor(Math.random()*CPUitems.length)];
    return CPUpick;
}

/*playerSelection later gets its variable from prompt*/
playerSelection="weapon";

/* playerRound = 1 => zmaga
   playerRound = 2 => poraz
   playerRound = 0 => draw */ 
function playRound(playerSelection,CPUpick) {
    if (playerSelection.toLowerCase() === "rock") {
            if (CPUpick==="rock") {
                return 0;
                }
            else if (CPUpick==="paper") {
                return 2;
            }
            else if (CPUpick==="scissors") {
                return 1;
                }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (CPUpick==="paper") {
            return 0;
   //         console.log("izenačenje");
            }
        else if (CPUpick==="scissors") {
            return 2;
//            console.log("Izgubil si!");
        }
        else if (CPUpick==="rock") {
            return 1;
 //           console.log("Bravo, zmaga!");
        }
    }

else if (playerSelection.toLowerCase() === "scissors") {
    if (CPUpick==="scissors") {
     //   console.log("izenačenje");
        return 0;
                }
    else if (CPUpick==="rock") {
      //  console.log("Izgubil si!");
        return 2;
            }
    else if (CPUpick==="paper") {
      //  console.log("Bravo, zmaga!");
        return 1;
    } 
}
else
    {
    return 4;
    }
}

let stevecWin=0;
let stevecLost=0;
let stevecDraw=0;
let i=0;
const dokoliko=5;


function game() {
    for (stevecLost = 0, stevecWin=0; stevecLost < dokoliko, stevecWin<dokoliko; stevecLost,stevecWin) {
        getComputerChoice();
        let playerSelection=prompt("Please pick your weapon: ");
        i++;
        console.log("Round: "+i);
        console.log("Computer's pick: " +CPUpick);
        console.log("Your pick: " +playerSelection);
        
    playRound(playerSelection,CPUpick);
    let whowin=playRound(playerSelection,CPUpick);
    if (whowin===1) {
        stevecWin++;
        console.log("Your score: "+stevecWin);
    }
    else if (whowin===2) {
        stevecLost++;
        }
    else if (whowin===0  || 4) {
        stevecDraw++;
        if(whowin===4) {
            console.log("Your weapon is not registered.");
        } 
    }
    
    
    console.log("RESULT ::: Player: "+stevecWin+" ::: Computer: "+stevecLost+" ::: Draw: "+stevecDraw);
    console.log(' ');//new line in console for cleaner view.
    //console.log(whowin);
    if(stevecWin>=dokoliko) {
        console.log("WIN!!!");
    }
    if (stevecLost>=dokoliko) {
        console.log("YOU LOST!!!");
    }

    //console.log(playRound);
    
}
}
game();