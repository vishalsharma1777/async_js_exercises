const fs = require('fs');

function addFileName(fileName) {
  return new Promise((resolve, reject) => {
    fs.appendFile('./filenames.txt', fileName + '\r\n', (error) => {
      if (!error) {
        //console.log('file name added succesfully.');
        resolve('file name added succesfully.');
      } else {
        //console.log('file name cannot be added.');
        reject('file name cannot be added.');
      }
    });
  });
}

module.exports = addFileName;
