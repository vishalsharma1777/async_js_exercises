const fs = require('fs');
const fileNamesAndPaths = require('./util/fileNamesAndPaths');

function asyncAwaitFunction(numberOfFiles, directoryPath) {
  let filePaths = fileNamesAndPaths(numberOfFiles, directoryPath);

  async function directoryMaker() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fs.mkdir(directoryPath, (error) => {
          if (!error) {
            resolve('directory created promise resolved');
          } else {
            reject(error);
          }
        });
      }, 0);
    });
  }

  function fileCreation(address) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = JSON.stringify(Math.random() * 100);
        fs.writeFile(address, data, (error) => {
          if (!error) {
            resolve(`File ${address} created`);
          } else {
            reject('cant be created');
          }
        });
      }, 1000);
    });
  }

  function fileDeletion(address) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fs.unlink(address, (error) => {
          if (!error) {
            resolve(`File ${address} deleted`);
          } else {
            reject(error);
          }
        });
      }, 1000);
    });
  }

  async function creationOutcome() {
    let allCreated = [];
    for (let address of filePaths) {
      allCreated.push(await fileCreation(address));
    }
    console.log(allCreated);
    return new Promise((resolve, reject) => {
      Promise.all(allCreated)
        .then(() => {
          resolve('All the files are created');
        })
        .catch(() => {
          reject('CANT BE CREATED');
        });
    });
  }

  async function deleltionOutcome() {
    let alldeleted = [];
    for (let address of filePaths) {
      alldeleted.push(await fileDeletion(address));
    }
    console.log(alldeleted);
    return new Promise((resolve, reject) => {
      Promise.all(alldeleted)
        .then(() => {
          resolve('All the files are deleted');
        })
        .catch(() => {
          reject('CANT BE DELETED');
        });
    });
  }

  async function createDirectoryAndFiles() {
    try {
      const res0 = await directoryMaker();
      setTimeout(() => {
        console.log({ res0, action: 'Directory Made' });
      }, 0);

      const res1 = await creationOutcome();
      setTimeout(() => {
        console.log({ res1, action: 'Files Made' });
      }, 0);

      const res2 = await deleltionOutcome();
      setTimeout(() => {
        console.log({ res2, action: 'Files Deleted' });
      }, 0);
    } catch (error) {
      setTimeout(() => {
        console.log({ error, action: 'Error ' });
      }, 3000);
    } finally {
      setTimeout(() => {
        console.log({ finally: 'Execution completed.' });
      }, 0);
      console.log();
    }
  }

  createDirectoryAndFiles();

  return 'FILES CREATED AND DELETED USING Asunc Await.';
}
module.exports = asyncAwaitFunction;
