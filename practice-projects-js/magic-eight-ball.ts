let userName = 'Aly';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Am I pretty?';
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;

eightBall = randomNumber;

console.log(`Magic Eight Ball Answer: ${eightBall}`);

if (randomNumber === 0) {
  console.log('It is certain');
} else if (randomNumber === 1) {
   console.log('It is decidedly so');
} else if (randomNumber === 2) {
   console.log('Reply hazy try again');
} else if (randomNumber === 3) {
   console.log('Cannot predict now');
} else if (randomNumber === 4) {
   console.log('Do not count on it');
} else if (randomNumber === 5) {
   console.log('My sources say no');
} else if (randomNumber === 6) {
   console.log('Outlook not so good');
} else {
   console.log('Signs point to yes');
}