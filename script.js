let computerChoice;

const computerPlay = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return (computerChoice = 'Rock');
      break;
    case 1:
      return (computerChoice = 'Paper');
      break;
    case 2:
      return (computerChoice = 'Scissors');
      break;
  }
};

let playerChoice;

console.log('1 is Rock\n2 is Paper\n3 is Scissors');
const playerPlay = () => {
  let num2 = Number(prompt('Please choose your play: '));
  switch (num2) {
    case 1:
      return (playerChoice = 'Rock');
      break;
    case 2:
      return (playerChoice = 'Paper');
      break;
    case 3:
      return (playerChoice = 'Scissors');
      break;
    default:
      alert('invalid');
      playerPlay();
  }
};

//playerPlay();
// computerPlay();

console.log(playerChoice);
