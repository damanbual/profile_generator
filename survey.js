
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];
let answers = [];

const askQuestion = (index) => {
  if (index >= questions.length) {
    
    const profile = `Hello, I'm ${answers[0]}! I love ${answers[1]} and often listen to ${answers[2]} while doing it.\n
    My favourite meal of the day is ${answers[3]}, especially when I get to eat ${answers[4]}.\n
    When it comes to sports, I absolutely love ${answers[5]}.\n
    One of my superpowers is ${answers[6]}.\n
    `;
    
    console.log(profile);
    rl.close();
    return;
  }
  rl.question(questions[index], (answer) => {
    answers.push(answer);
    askQuestion(index + 1);
  });
};

askQuestion(0);