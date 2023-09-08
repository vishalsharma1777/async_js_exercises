const fs = require('fs');

function filesToBeSorted(directoryName) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryName, (error, files) => {
      if (error) {
        reject(error);
      } else {
        resolve(files);
      }
    });
  });
}
module.exports = filesToBeSorted;
