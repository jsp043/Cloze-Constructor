//Run Flashcard Application 
var inquirer = require('inquirer');

//Require module file
var flashCards = require('./flashCards.js');
//Require flashcards
var questions = require('./questions.js').questions;

var currentQuestion = 0;
var answerRight = 0;

var clozeQuestions = [];

function runQuestions() {
	inquirer.prompt([
		{
			type: 'input',
			message: clozeQuestions[currentQuestion].partial + '\nAnswer: ',
			name: 'userGuess'
		}
	]).then(function (answers) {