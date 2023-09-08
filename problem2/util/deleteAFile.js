const fs = require('fs');

function fileDeletion(address) {
  return new Promise((resolve, reject) => {
    if (address != '') {
      fs.unlink(address, (error) => {
        if (!error) {
          resolve(`File ${address} deleted`);
        } else {
          reject(error);
        }
      });
    } else {
      resolve('EMPTY FILE NAME');
    }
  });
}

module.exports = fileDeletion;
