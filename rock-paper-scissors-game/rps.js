function rockPaperScissorsGame() {
  console.log("Getting start with rock, paper and scissors game:");

  /*---For user: variable set----*/

  const userChoicePrompt = prompt("Enter Rock, paper, or Scissors ");
  let userChoice = userChoicePrompt.toLowerCase();

  /*---For computer: variable set----*/

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  /*-----Input resut of user & computer----*/

  console.log("User selected:", userChoice);
  console.log("Computer selected:", computerChoice);

  /*----condition of  wins/lose/tie/error----*/
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("yes,User win!");
  } else if (
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "paper")
  ) {
    console.log("yes,computer win!");
  } else if (userChoice === computerChoice) {
    console.log("The game is a Tie");
  } else {
    console.log("Plese input write option, Your input is wrong");
  }

  /*----condition to play again / not----*/
  const playAgainPrompt = prompt("Do you want to play again?(YES / NO)");
  const playAgain = playAgainPrompt
    ? playAgainPrompt.toLocaleLowerCase()
    : "no";

  if (playAgain === "yes") {
    //start game again
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for Playing! See you next Time.");
  }
}
//start game
rockPaperScissorsGame();
