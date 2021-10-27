// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./generateMarkdown');

// array of questions for user input
const questions = [{
	type: 'input',
	name: 'title',
	message: 'What is your project title?',
 },
 {
	type: 'input',
	name: 'description',
	message: 'What is your project about?',
 },
 {
	type: 'input',
	name: 'installation',
	message: 'What are the installation instructions?',
 },
 {
	type: 'input',
	name: 'usage',
	message: 'What is the usage information?',
 },
 {
	type: 'input',
	name: 'contributions',
	message: 'What are the contribution guidelines?',
 },
 {
	type: 'input',
	name: 'test',
	message: 'What are the test instructions?',
},	
{
	type: 'list',
	name: 'license',
	message: 'Which license applies to your application?',
	choices: ['Mozilla', 'Apache', 'MIT', 'GNU'],
},
{
	type: 'input',
	name: 'username',
	message: 'What is your GitHub username?',
},
{
	type: 'input',
	name: 'email',
	message: 'What is your email address?',
},
];

// function to initialize app
function init() {
	inquirer.prompt(questions).then((answers, license) => {
		const readMeContent = markDown(answers, license)
		fs.writeFile('README.md', readMeContent, (err) =>
			err ? console.log(err) : console.log(answers, license))
	})
};

// Function call to initialize app
init();
