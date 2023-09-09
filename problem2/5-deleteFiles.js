const fs = require('fs');
const readData = require('./util/readData');
const fileDeletion = require('./util/deleteAFile');

async function deleteFilesFromFilenames(delettingAddress) {
  const allFileNames = await readData(delettingAddress);

  let fileNames = allFileNames.split('\r\n');

  console.log(fileNames);

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
      fs.writeFile('filenames.txt', '', 'utf-8', (error) => {
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
  const value = 'THIS IS PART 5 OF PROBLEM 2';
  const action = 'ALL THE FILES WERE DELETED';

  return { value, action };
}

module.exports = deleteFilesFromFilenames;
