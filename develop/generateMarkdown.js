// function that returns a license badge based on which license is passed in

const mozillaBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
const gnuBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]";

function renderLicenseBadge(license) {
	if (license === 'Mozilla') {
		return mozillaBadge;
	} else if (license === 'Apache') {
		return apacheBadge;
	} else if (license === 'MIT') {
		return mitBadge;
	} else {
		return gnuBadge;
	}
	
}

// function that returns the license link

const mozillaLink = "(https://opensource.org/licenses/MPL-2.0)";
const apacheLink = "(https://opensource.org/licenses/Apache-2.0)";
const mitLink = "(https://opensource.org/licenses/MIT)";
const gnuLink = "(http://www.gnu.org/licenses/gpl-3.0)";

function renderLicenseLink(license) {}
if (license === 'Mozilla') {
	return mozillaLink;
} else if (license === 'Apache') {
	return apacheLink;
} else if (license === 'MIT') {
	return mitLink;
} else {
	return gnuLink;
}


// function to generate markdown for README
function generateMarkdown(answers, license) {
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
  ${answers.license}

  ## Questions
  Please enter contact information for any questions:
  ${answers.github}
  ${answers.email}

`;
}
renderLicenseBadge();
renderLicenseLink();

module.exports = generateMarkdown; renderLicenseBadge; renderLicenseLink;
