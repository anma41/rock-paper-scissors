let x=129;
console.log(x);
console.log("osem");
let CPUitems=["rock","paper","scissors"];
let CPUpick;
function getComputerChoice() {
    CPUpick=CPUitems[Math.floor(Math.random()*CPUitems.length)];
    return CPUpick;
}
getComputerChoice();
console.log(CPUpick);


let playerSelection=prompt("Prosim izberi svoje orožje");
if (playerSelection.toLowerCase() === "rock") {
    if (CPUpick==="rock") {
        console.log("izenačenje");
        }
    else if (CPUpick==="paper") {
        console.log("Izgubil si!");
    }
    else if (CPUpick==="scissors") {
        console.log("Bravo, zmaga!");
    }
    else {
        console.log("Ne igraš po pravilih")
    }  
}
else if (playerSelection.toLowerCase() === "paper") {
    if (CPUpick==="paper") {
        console.log("izenačenje");
        }
    else if (CPUpick==="scissors") {
        console.log("Izgubil si!");
    }
    else if (CPUpick==="rock") {
        console.log("Bravo, zmaga!");
    }
    else {
        console.log("Ne igraš po pravilih")
    } 
}

else if (playerSelection.toLowerCase() === "scissors") {
    if (CPUpick==="scissors") {
        console.log("izenačenje");
        }
    else if (CPUpick==="rock") {
        console.log("Izgubil si!");
    }
    else if (CPUpick==="paper") {
        console.log("Bravo, zmaga!");
    } 
}
else
    {console.log("Neregistrirano orožje.")
    }
    console.log(playerSelection);
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
