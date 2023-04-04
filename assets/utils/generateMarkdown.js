// PROJECT NAME //
function defineProjectName(projectName) {
  if (projectName !== '') {
    return projectName;
  } else {
    return 'Untitled Project';
  }
}
// END PROJECT NAME //


// LICENSE INFORMATION //
const licenses = [
  {
    license: "GNU AGPLv3.0",
    link: "agpl-3.0",
  },
  {
    license: "GNU GPLv3.0",
    link: "gpl-3.0",
  },
  {
    license: "GNU LGPLv3.0",
    link: "lgpl-3.0",
  },
  {
    license: "Mozilla Public License 2.0",
    link: "mpl-2.0",
  },
  {
    license: "Apache License 2.0",
    link: "apache-2.0",
  },
  {
    license: "MIT License",
    link: "mit",
  },
  {
    license: "Boost Software License 1.0",
    link: "bsl-1.0",
  },
  {
    license: "The Unlicense",
    link: "unlicense",
  },
];

// If there is no license, return an empty string, default to green
function renderLicenseBadge(license, color) {
  if (license !== "") {
    if (color) {
      return `https://img.shields.io/badge/license-${license}-${color}`;
    } else {
      return `https://img.shields.io/badge/license-${license}-green`;
    }
  } else {
    return `https://img.shields.io/badge/license-<INSERT LICENSE HERE>-<INSERT COLOR HERE>`;
  }
}

// If there is no license, return a fillable link to a license
function renderLicenseLink(license) {
  if (license !== "") {
    // Find the object in json array that has a matching license name and use its link property
    const licenseObject = licenses.find(
      (licenseObject) => licenseObject.license === license
    );
    console.log(licenseObject);
    return `https://choosealicense.com/licenses/${licenseObject.link}/`;
  } else {
    return `https://choosealicense.com/licenses/<INSERT-LICENSE-TYPE-HERE>/`;
  }
}
// END LICENSE INFORMATION //


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  var returnString = "";
  var tableOfContents = `## Table of Contents\n`;

  // If there is a description, add it to the table of contents and the return string
  if (data.description !== "") {
    tableOfContents += `* [Description](#description)\n`;
    returnString += `<a name="description"></a>\n`;
    returnString += `## Description\n`;
    returnString += `${data.description}\n`;
  }

  // If there are installation instructions, add them to the table of contents and the return string
  if (data.installInstructions !== "") {
    tableOfContents += `* [Installation Instructions](#installation-instructions)\n`;
    returnString += `<a name="installation-instructions"></a>\n`;
    returnString += `## Installation Instructions\n`;
    returnString += `${data.installInstructions}\n`;
  }

  // If there are usage instructions, add them to the table of contents and the return string
  if (data.usageInformation !== "") {
    tableOfContents += `* [Usage Information](#usage-information)\n`;
    returnString += `<a name="usage-information"></a>\n`;
    returnString += `## Usage Information\n`;
    returnString += `${data.usageInformation}`;
  }

  // If there are test instructions, add them to the table of contents and the return string
  if (data.testInstructions !== "") {
    tableOfContents += `* [Test Instructions](#test-instructions)\n`;
    returnString += `<a name="test-instructions"></a>\n`;
    returnString += `## Test Instructions\n`;
    returnString += `${data.testInstructions}\n`;
  }

  // If there are contribution guidelines, add them to the table of contents and the return string
  if (data.contributionGuidelines !== "") {
    tableOfContents += `* [Contribution Guidelines](#contribution-guidelines)\n`;
    returnString += `<a name="contribution-guidelines"></a>\n`;
    returnString += `## Contribution Guidelines\n`;
    returnString += `${data.contributionGuidelines}\n`;
  }

  // If there is a license, add it to the table of contents and the return string
  if (data.license !== "") {
    tableOfContents += `* [License](#license)\n`;
    returnString += `<a name="license"></a>\n`;
    returnString += `## License\n`;
    returnString += `This project is licensed under the ${data.license} license. For more information, please visit ${renderLicenseLink(data.license)}.\n`;
  }

  // If there is a GitHub username or email, add it to the table of contents and the return string
  if (data.userGitHubName !== "" || data.userEmail !== "") {
    tableOfContents += `* [Questions](#questions)\n`;
    returnString += `<a name="questions"></a>\n`;
    returnString += `## Questions\n`;
    if (data.userGitHubName !== "" && data.userEmail !== "") {
      returnString += `If you have any questions, please contact me at ${data.userEmail} or visit my GitHub page at https://github.com/${data.userGitHubName}.\n`;
    } else if (data.userGitHubName !== "") {
      returnString += `If you have any questions, please visit my GitHub page at https://github.com/${data.userGitHubName}.\n `
    } else {
      returnString += `If you have any questions, please contact me at ${data.userEmail}.\n`;
    }
  }

  // Return the table of contents and the return string
  return `<img src="${renderLicenseBadge(data.license, data.licenseColor)}" alt="License Badge" />\n\n
# ${defineProjectName(data.projectName)}\n
${tableOfContents}\n
${returnString}
`;
}

module.exports = { generateMarkdown };
