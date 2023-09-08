const fs = require('fs');

function readData(address) {
  return new Promise((resolve, reject) => {
    fs.readFile(address, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
        return;
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = readData;
