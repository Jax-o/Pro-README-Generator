// function that returns a license badge based on which license is passed in

const iscBadge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
const apacheBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
const mitBadge = "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
const gnuBadge = "![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";

function renderLicenseBadge(license) {
	if (license === 'ISC') {
		return iscBadge;
	} else if (license === 'Apache') {
		return apacheBadge;
	} else if (license === 'MIT') {
		return mitBadge;
	} else {
		return gnuBadge;
	}
	
}

// function that returns the license link

const iscLink = "https://opensource.org/licenses/ISC";
const apacheLink = "https://opensource.org/licenses/Apache-2.0";
const mitLink = "https://opensource.org/licenses/MIT";
const gnuLink = "http://www.gnu.org/licenses/gpl-3.0";

function renderLicenseLink(license) {
if (license === 'ISC') {
	return iscLink;
} else if (license === 'Apache') {
	return apacheLink;
} else if (license === 'MIT') {
	return mitLink;
} else {
	return gnuLink;
}
}


// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributions](#contributions)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributions
  ${answers.contributions}

  ## Tests
  ${answers.tests}

  ## License
  ${renderLicenseBadge(answers.license)}
  ${renderLicenseLink(answers.license)}


  ## Questions
  Please enter your GitHub username and email address for any questions:
  ${answers.username}
  ${answers.email}

`;

}



module.exports = generateMarkdown; renderLicenseBadge; renderLicenseLink;
