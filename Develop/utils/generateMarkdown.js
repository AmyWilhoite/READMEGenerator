// Due to time limitations,  was not able to get to these yet but was able to generate a general unlicense badge for the readme.
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Title 
${data.title}

## Description
${data.description}

## Table of Contents

* Installation Instructions 
${data.installation}

* Usage
${data.usage}

* Contributing
${data.contributing}

* Tests
${data.test}

## License
${data.license}

## Badge
![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)

## Links
* Repository URL: ${data.repo}
* Page URL (if applicable): ${data.page}
`;
}

module.exports = generateMarkdown;
