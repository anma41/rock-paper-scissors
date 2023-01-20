let CPUitems=["rock","paper","scissors"];
let CPUpick;
function getComputerChoice() {
    CPUpick=CPUitems[Math.floor(Math.random()*CPUitems.length)];
    return CPUpick;
}
getComputerChoice();
//console.log(CPUpick);


let playerSelection=prompt("Prosim izberi svoje orožje");
function playRound(playerSelection,CPUpick) {
if (playerSelection.toLowerCase() === "rock") {
    if (CPUpick==="rock") {
        return "Tie";
        }
    else if (CPUpick==="paper") {
        return "Lost";
        console.log("Izgubil si!");
    }
    else if (CPUpick==="scissors") {
        return "Win";
        console.log("Bravo, zmaga!");
    }
    else {
        console.log("Neregistrirano orožje.")
    }  
}
else if (playerSelection.toLowerCase() === "paper") {
    if (CPUpick==="paper") {
        return "Tie";
        console.log("izenačenje");
        }
    else if (CPUpick==="scissors") {
        return "Lost";

        console.log("Izgubil si!");
    }
    else if (CPUpick==="rock") {
        return "Win";
        console.log("Bravo, zmaga!");
    }
    else {
        return "Wrong item!";
        console.log("Neregistrirano orožje.");
    } 
}

else if (playerSelection.toLowerCase() === "scissors") {
    if (CPUpick==="scissors") {
        return "Tie";
        console.log("izenačenje");
        }
    else if (CPUpick==="rock") {
        return "Lost";
        console.log("Izgubil si!");
            }
    else if (CPUpick==="paper") {
        return "Win";
        console.log("Bravo, zmaga!");
    } 
}
else
    {console.log("Neregistrirano orožje.")
    }
}

console.log("Izbor računalnika: " +CPUpick);
console.log("Tvoja izbira: " +playerSelection);
playRound(playerSelection,CPUpick);
console.log(playRound(playerSelection, CPUpick));




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
