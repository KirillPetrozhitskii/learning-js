/**
 * Quiz Game
 * freeCodeCamp | JavaScript Lab
 *
 * Selects random quiz questions and answers,
 * then checks whether the selected answer is correct.
 *
 * Concepts: Arrays, Objects, Functions,
 * Math.random(), Math.floor(), Conditionals
 */

const questions = [
  {
    category: "Star Wars",
    question: "Who is Luke Skywalker's father?",
    choices: ["Obi-Wan Kenobi", "Darth Vader", "Yoda"],
    answer: "Darth Vader",
  },
  {
    category: "The Lord of the Rings",
    question: "Who destroyed the One Ring?",
    choices: ["Frodo", "Sam", "Gollum"],
    answer: "Gollum",
  },
  {
    category: "Harry Potter",
    question: "Which house does Harry Potter belong to?",
    choices: ["Slytherin", "Ravenclaw", "Gryffindor"],
    answer: "Gryffindor",
  },
  {
    category: "Marvel",
    question: "What is Iron Man's real name?",
    choices: ["Steve Rogers", "Tony Stark", "Bruce Banner"],
    answer: "Tony Stark",
  },
  {
    category: "DC Comics",
    question: "Which city does Batman protect?",
    choices: ["Metropolis", "Central City", "Gotham City"],
    answer: "Gotham City",
  },
];

function getRandomQuestion(questions) {
    const question = Math.floor(Math.random() * questions.length);
    return questions[question];
}

function getRandomComputerChoice(choices) { 
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getResults(question, computerChoice) {
    if (question.answer !== computerChoice) {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    } 

    return "The computer's choice is correct!";
}


const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);

console.log(randomQuestion);
console.log(computerChoice);
console.log(getResults(randomQuestion, computerChoice));