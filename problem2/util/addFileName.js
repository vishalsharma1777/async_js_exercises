const fs = require('fs');

async function addFileName(fileName) {
  return new Promise((resolve, reject) => {
    fs.appendFile('./filenames.txt', fileName + '\r\n', (error) => {
      if (!error) {
        resolve('file name added succesfully.');
      } else {
        reject('file name cannot be added.');
      }
    });
  });
}

module.exports = addFileName;
