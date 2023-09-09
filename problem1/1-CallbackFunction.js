const fs = require('fs');
const fileNamesAndPaths = require('./util/fileNamesAndPaths');
//const { error } = require('console');

function messageShowCallback(message) {
  console.log(message);
}

const callbackFunction = (numberOfFiles, directoryPath) => {
  let filePaths = fileNamesAndPaths(numberOfFiles, directoryPath);

  fs.mkdir(directoryPath, (error) => {
    if (!error) {
      console.log('Directory created successfully');
      const createFiles = (filePaths) => {
        let i = 0;
        const createNextFile = () => {
          if (i < filePaths.length) {
            let address = filePaths[i];
            let data = JSON.stringify(Math.random());
            fs.writeFile(address, data, (error) => {
              if (!error) {
                console.log(`File ${address} created successfully`);
                i++;
                createNextFile();
              } else {
                console.log(error);
              }
            });
          } else {
            deleteFiles(filePaths);
          }
        };
        createNextFile();
      };
      const deleteFiles = (filePaths) => {
        let i = 0;

        const deleteNextFile = () => {
          if (i < filePaths.length) {
            let address = filePaths[i];

            setTimeout(() => {
              fs.unlink(address, (error) => {
                if (!error) {
                  console.log(`File at ${address} deleted successfully`);
                  i++;
                  deleteNextFile();
                } else {
                  console.log(error);
                }
              });
            }, 1000);
          } else {
            messageShowCallback('Implemented the callback functions');
          }
        };
        deleteNextFile();
      };
      createFiles(filePaths);
    } else {
      console.log(error);
    }
  });
};

module.exports = callbackFunction;
