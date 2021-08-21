// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `## License 
    This project is licensed with ${license}.`;

  if (license == 'MIT') {
    link = 'https://opensource.org/licenses/MIT';
  } else if (license == 'IBM') {
    link = 'https://opensource.org/licenses/IPL-1.0';
  } else if (license == 'Apache') {
    link = 'https://opensource.org/licenses/Apache-2.0';
  } else if (license == 'None') {
    return ``;
  }
  console.log(link);
}

//MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//IBM [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
//Apache [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'None') {
    return `## License Link`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Author
  GitHub UserName: ${response.github}  
  contact me: ${response.email}

  ## Table of Contents
  *[Description](#description)  
  *[Installation](#install)  
  *[Usage](#usage)  
  *[Tests](#test)  
  *[Contributions](#contribution)

  ## Description
  ${response.description}

  ## Instalation
  ${response.install}

  ## Usage
  ${response.usage}

  ## Tests
  ${response.test}

  ## Contribute
  ${response.contribute}
  ``
  ## License
  ${renderLicenseBadge}
  `;

  //${data.license != "" ? `[${data.license}](#license)  ` : ""}
  //this would say, if there is no license, don't use this section
}

module.exports = generateMarkdown;
