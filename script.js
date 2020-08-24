let computerSelection = '';
const computerPlay = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      computerSelection = 'Rock';
      break;
    case 1:
      computerSelection = 'Paper';
      break;
    case 2:
      computerSelection = 'Scissors';
      break;
  }
};

let playerSelection = '';
const playerPlay = () => {
  let num2 = Number(
    prompt('Please choose your play: \n1 is Rock\n2 is Paper\n3 is Scissors')
  );
  switch (num2) {
    case 1:
      playerSelection = 'Rock';
      break;
    case 2:
      playerSelection = 'Paper';
      break;
    case 3:
      playerSelection = 'Scissors';
      break;
    default:
      alert('invalid');
      playerPlay();
  }
};

const rockPaperScissors = (computerSelection, playerSelection) => {
  console.log(`computer = ${computerSelection}, player = ${playerSelection}`);
  if (computerSelection === playerSelection) {
    return 'Draw';
  } else if (
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock')
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
};

let game = () => {
  for (let i = 0; i < 5; i++) {
    playerPlay();
    computerPlay();
    console.log(rockPaperScissors(computerSelection, playerSelection));
  }
};

game();
