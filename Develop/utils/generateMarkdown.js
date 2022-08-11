// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license === 'None') {
    return `[GitHub License]
    (https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license === 'None') {
    return `\n * [License] (#license)\n`
  } return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License 
    This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.title)}
  ## Description
  ${data.description}
  ## Table of Contents
  ${renderLicenseLink(data.license)}
  * [Installation] (#install)
  * [howTo Use] (#howTo)
  * [Contributions] (#contributions)
  * [reportIssues] (#issues)


  ## install
  \`\`\`
  ${data.install}
  \`\`\`

  ## howTo Use
  \`\`\`
  ${data.usage}
  \`\`\`

  ## Contributions
  ${data.contributions}

  ## reportIssues
  ${data.issues}

  ## Questions
  If you have any questions about this repo, open an issue or contact me directly @${data.email}. You can find more of my work at [${data.github}] https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
