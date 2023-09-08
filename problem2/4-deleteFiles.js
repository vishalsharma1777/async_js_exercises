const fs = require('fs');

async function deleteFilesFromFilenames(delettingAddress) {
  let filesToBeDeleted = new Promise((resolve, reject) => {
    fs.readFile(delettingAddress, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

  const answer = await filesToBeDeleted;

  let fileNames = [];

  fileNames = answer.split('\r\n');
  console.log(fileNames);

  async function fileDeletion(address) {
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
  async function allDeletion() {
    let deletionPromises = [];

    for (let i = 0; i < fileNames.length; i++) {
      const promise = fileDeletion(fileNames[i])
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(`Error deleting ${fileNames[i]}: ${error}`);
        });

      deletionPromises.push(promise);
    }

    await Promise.all(deletionPromises);
  }

  allDeletion()
    .then(() => {
      fs.writeFile(delettingAddress, '', 'utf-8', (error) => {
        if (!error) {
          console.log('EMPTIED');
        } else {
          console.log('still there');
        }
      });
    })
    .catch((error) => {
      console.error(`Error during file deletion: ${error}`);
    });
}

deleteFilesFromFilenames('./filenames.txt');
