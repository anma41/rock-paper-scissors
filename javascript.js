let CPUitems=["rock","paper","scissors"];
let CPUpick;
function getComputerChoice() {
    CPUpick=CPUitems[Math.floor(Math.random()*CPUitems.length)];
    return CPUpick;
}
//getComputerChoice();
//console.log(CPUpick);

playerSelection="orožje";
//let playerSelection="prazno";//=prompt("Prosim izberi svoje orožje");
//function playerSel(playerSelection) {
  //  playerSelection=prompt("Prosim izberi svoje orožje");
//}
//playerSel(playerSelection);
//console.log(playerSel);
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
                console.log("Bravo, zmaga!");
            }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (CPUpick==="paper") {
            return 0;
            console.log("izenačenje");
            }
        else if (CPUpick==="scissors") {
            return 2;

            console.log("Izgubil si!");
        }
        else if (CPUpick==="rock") {
            return 1;
            console.log("Bravo, zmaga!");
        }
    }

else if (playerSelection.toLowerCase() === "scissors") {
    if (CPUpick==="scissors") {
        console.log("izenačenje");
        return 0;
                }
    else if (CPUpick==="rock") {
        console.log("Izgubil si!");
        return 2;
            }
    else if (CPUpick==="paper") {
        console.log("Bravo, zmaga!");
        return 1;
    } 
}
else
    {//console.log("Neregistrirano orožje.")
    return 4;
    }
}


//console.log("Izbor računalnika: " +CPUpick);
//console.log("Tvoja izbira: " +playerSelection);
//playRound(playerSelection,CPUpick);
//console.log(playRound(playerSelection, CPUpick));

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
    console.log(whowin);
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
  /*  )
    if rezultat = 1 {
        for (i=0; i < 5; i++) {
    playRound(playerSelection,CPUpick)
    } 
}
}
console.log(game());
console.log(i);
/*<script>
     let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
     for (let i=1; i<= answer; i++) {
        if (i%15===0) {
            console.log(i, "FizzBuzz");
        } 
        else if (i % 3===0) {
            console.log(i, "Fizz");
        }
        else if (i % 5===0) {    
        console.log(i, " Buzz");
     }
    }
    //comment najprej določi spremenljivko in ji definiraj začetno vrednost
    let x=0;
    let y=0;
    let sum=x+y;
    console.log(sum);

    
    
    </script>*/

/*if (playerSelection !== "scissors" || "rock"  || "paper") {
    console.log(playerSelection);
    console.log("uporabljaš neregistrirano orožje");
} */
/*function playerSelection () {

}*/
/*playerSelection
computerSelection
return string ("You lose! Paper beats Rock!") OR "YOU WIN!";*/
//case nonsensitive selection
/*
za štetje koliko iger smo šli, naredimo z loopi (for..) igramo do 5.
function game()
prompt() za userjev input
*/
