//MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//IBM [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
//Apache [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'IBM':
      return 'https://opensource.org/licenses/IPL-1.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
  ${license} 
    
  ${renderLicenseLink(license)}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  
  ## Table of Contents
  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [Tests](#tests)  
  [Contributing](#contributing)  
  [Questions](#questions)  
  [License](#license)

  ## Description
  ${response.description}

  ## Installation
  Run
  > ${response.install}
  
  to pull in dependencies.

  ## Usage
  Run
  > ${response.usage}

  to run the program.

  ## Tests
  Run
  > ${response.test}
  
  to test the program
  
  ## Contributing
  Contact ${response.email} to a get a pull request.

  ## Questions
  Contact ${response.email} for any questions.  
  Github username: ${response.github}  
  Link to my github profile: https://github.com/${response.github}
  
  ${renderLicenseSection(response.license)}  
  ${renderLicenseBadge(response.license)}
  `;
}

module.exports = generateMarkdown;
