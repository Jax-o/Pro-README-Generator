// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  ${answers.license}

  ## Questions
  Please enter contact information for any questions:
  ${answers.github}
  ${answers.email}

`;
}

module.exports = generateMarkdown;
