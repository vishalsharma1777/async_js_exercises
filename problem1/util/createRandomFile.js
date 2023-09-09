const fs = require('fs');
function createIndividualFiles(address) {
  return new Promise((resolve, reject) => {
    let data = JSON.stringify(Math.random());
    fs.writeFile(address, data, (error) => {
      if (!error) {
        console.log(`File ${address} created successfully`);
        resolve();
        // i++;
        // createNextFile();
      } else {
        reject(error);
      }
    });
  });
}
module.exports = createIndividualFiles;
