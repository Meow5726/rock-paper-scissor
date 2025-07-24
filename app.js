let user=0;
let comp=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user");
const cScore = document.querySelector("#comp");
const compChoice = () => {
    const options = ["rock","paper","scissor"];
    const rIdx = Math.floor(Math.random()*3);
    return options[rIdx];
}
const showWinner = (userWin) => {
    if(userWin){
        user++;
        uScore.innerText = user;
        console.log("YOU WON!");
        msg.innerText = `YOU WON!`;
        msg.style.backgroundColor = "green";
    }else{
        comp++;
        cScore.innerText = comp;
        console.log("YOU LOST!");
        msg.innerText = `YOU LOST!`;
        msg.style.backgroundColor = "red";
    }
}
const play = (choiceId) => {
    console.log("User Choice - ",choiceId);
    const compC = compChoice();
    console.log("Computer Choice - ",compC);
    if(choiceId === compC){
        console.log("GAME WAS DRAW!");
        msg.innerText = "IT'S A DRAW!";
        msg.style.backgroundColor = "black";
    } else {
        let userWin = true;
        if(choiceId === "rock"){
            userWin = compC === "paper"? false: true;
        } else if(choiceId === "paper") {
            userWin = compC === "scissor"? false: true;
        } else {
            userWin = compC === "rock"? false: true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("Choice was Clicked! - ", choiceId);
        play(choiceId);
    });
});