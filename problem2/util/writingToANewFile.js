const fs = require('fs');

function writingToANewFile(newFileAddress, data, resolveMsg, rejectMsg) {
  return new Promise((resolve, reject) => {
    fs.writeFile(newFileAddress, data, (error) => {
      if (!error) {
        console.log(resolveMsg);
        resolve(resolveMsg);
      } else {
        console.log(rejectMsg);
        reject(rejectMsg);
      }
    });
  });
}

module.exports = writingToANewFile;
