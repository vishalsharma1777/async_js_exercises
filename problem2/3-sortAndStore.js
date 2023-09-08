const fs = require('fs');
const addFileName = require('./util/addFileName');

async function sortFileContent(directoryPath) {
  let knowYourFiles = new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject('files not available');
      } else {
        resolve(files);
      }
    });
  });
  const answer = await knowYourFiles;

  async function readSortAndWrite(address) {
    return new Promise((resolve, reject) => {
      fs.readFile(address, 'utf-8', (error, data) => {
        if (error) {
          reject();
          return;
        }
        const yo = data.split(' ').sort().join(' ');
        fs.appendFile('sort.txt', yo + '\n', (error) => {
          if (!error) {
            resolve();
          } else {
            reject('file cant be sorted');
          }
        });
      });
    });
  }

  for (let i = 1; i <= answer.length; i++) {
    await readSortAndWrite(`./sentences/sentence${i}.txt`)
      .then(() => {
        console.log(`File sentence${i}.txt sorted and added.`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log('ALL THE FILES WERE SORTED');
  addFileName('sort.txt');
}

module.exports = sortFileContent;
