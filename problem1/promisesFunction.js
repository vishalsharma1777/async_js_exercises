const fs = require('fs');
const fileNamesAndPaths = require('./util/fileNamesAndPaths');

const promiseFunction = (numberOfFiles, directoryPath) => {
  let filePaths = fileNamesAndPaths(numberOfFiles, directoryPath);

  const funcForDir = (directoryPath) => {
    const directoryMaker = new Promise((resolve, rejects) => {
      fs.mkdir(directoryPath, (error) => {
        if (!error) {
          resolve('directory created');
        } else {
          rejects(error);
        }
      });
    });
    return directoryMaker;
  };

  //funcForDir(directoryPath);

  const createFile = (address) => {
    const created = new Promise((resolve, reject) => {
      let data = JSON.stringify(Math.random() * 1000);
      fs.writeFile(address, data, (error) => {
        if (!error) {
          resolve(`File ${address} created succesfully`);
        } else {
          reject(error);
        }
      });
    });
    return created;
  };

  const creation = (filePaths) => {
    const allCreated = [];
    for (let address of filePaths) {
      allCreated.push(
        createFile(address).then((res) => {
          console.log(res);
        })
      );
    }
    return allCreated;
  };

  //console.log(creation(filePaths));

  const deleteFile = (address) => {
    const deleted = new Promise((resolve, reject) => {
      fs.unlink(address, (error) => {
        if (!error) {
          resolve(`File ${address} deleted yooo.`);
        } else {
          reject(`File ${address} cant be deleted`, error);
        }
      });
    });
    return deleted;
  };

  const deletion = (filePaths) => {
    const allDeleted = [];
    setTimeout(() => {
      for (let address of filePaths) {
        allDeleted.push(
          deleteFile(address).then((res) => {
            console.log(res);
          })
        );
      }
    }, 2220);

    return allDeleted;
  };

  // const reRunner = () => {
  //   const validDirectory = new Promise((resolve, reject) => {
  //     fs.readdir(directoryPath, (error, files) => {
  //       if (error) {
  //         console.error(error);
  //         reject('Error reading directory');
  //       } else if (files.length === 0) {
  //         resolve('Directory is empty');
  //       } else {
  //         resolve('Valid directory');
  //       }
  //     });
  //   });
  //   return validDirectory;
  // };

  funcForDir(directoryPath)
    .then((res) => {
      console.log(res);
      return Promise.all(creation(filePaths));
    })
    .then(() => {
      console.log('all the files created');
      return Promise.all(deletion(filePaths));
    })
    .then(() => {
      console.log('all files deleted');
    })
    .catch((error) => {
      console.log(error);
    });

  // return reRunner();
  // })
  // .then((res) => {
  //   console.log(res);
  //   return Promise.all(creation(filePaths));
  // })
  // .then((res)=>{
  //   console.log(res);
  //   console.log('created second times');
  // })

  return 'implemented the promise functions';
};

module.exports = promiseFunction;
