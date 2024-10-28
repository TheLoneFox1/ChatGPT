const prompt = require("prompt-sync")();

console.log('Welcome to the Climate Change Awareness Game!');

let score = 0;//Score

function decisionScenario(question, options, correctAnswerIndex) { //sets up the game's main ability to ask and get answers to questions, and to score them.
    console.log(question);

    for (let i = 0; i < options.length; i++) {
        console.log(`${i + 1}. ${options[i]}`);
    }  //Removed unnesseccary variable and improved it so it actually showcases all the options.

    let playerAnswer = parseInt(prompt("Enter your choice (number):")) - 1;  //Asks and recieves the player's answer to the question.
    
    if (playerAnswer === correctAnswerIndex) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score++;//Updates the score if the answer is correct
    } else {
        console.log(`Incorrect! The better choice would be: ${options[correctAnswerIndex]}`);
    }//shows the better answer if they answered wrong
}

decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    2//corrected the correct answer
);

decisionScenario(
    '\nYou are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    3//corrected the correct answer
);

decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center'],
    3//corrected the correct answer
);

decisionScenario(
    '\nHow do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    4//corrected the correct answer
);

console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);
