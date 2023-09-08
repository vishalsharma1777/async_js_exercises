const fs = require('fs');
const textgenrator = require('./textGenerator');

async function createFile(address, number_of_lines) {
  return new Promise((resolve, reject) => {
    let data = textgenrator(number_of_lines);
    fs.writeFile(address, data, 'utf8', (error) => {
      if (!error) {
        resolve(`File ${address} created succesfully`);
      } else {
        reject(error);
      }
    });
  });
}

module.exports = createFile;
