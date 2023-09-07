const fs = require('fs');
const fileNamesAndPaths = require('./util/fileNamesAndPaths');

const callbackFunction = (numberOfFiles, directoryPath) => {
  let filePaths = fileNamesAndPaths(numberOfFiles, directoryPath);

  const directoryMaker = (directoryPath) => {
    fs.mkdir(directoryPath, (error) => {
      if (!error) {
        console.log('Direcotry created successfully');
      } else {
        console.log(error);
      }
    });
  };
  directoryMaker(directoryPath);

  const filesMaker = (filePaths) => {
    for (let address of filePaths) {
      let data = JSON.stringify(Math.random());
      fs.writeFile(address, data, (error) => {
        if (!error) {
          console.log(`File ${address} created successfully`);
        } else {
          console.log(error);
        }
      });
    }
  };
  filesMaker(filePaths);

  const filesDeleter = (filePaths) => {
    for (let address of filePaths) {
      setTimeout(() => {
        fs.unlink(address, (error) => {
          if (!error) {
            console.log(`File at ${address} deleted successfully`);
          } else {
            console.log(error);
          }
        });
      }, 1000);
    }
  };
  filesDeleter(filePaths);

  return 'implemented the call back functions';
};

module.exports = callbackFunction;
