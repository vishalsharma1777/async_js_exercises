const { error } = require('console');
const fs = require('fs');
const addFileName = require('./util/addFileName');

async function changeToUppercase(lowercaseFileName, uppercaseFileName) {
  let readData = new Promise((resolve, reject) => {
    fs.readFile(lowercaseFileName, 'utf-8', (error, data) => {
      if (error) {
        reject();
        return;
      } else {
        resolve(data);
      }
    });
  });

  const dataToBeConverted = await readData;
  //console.log(dataToBeConverted);

  let convertingToUppercase = new Promise((resolve, reject) => {
    if (!dataToBeConverted) {
      reject(error);
    } else {
      resolve(dataToBeConverted.toUpperCase());
    }
  });

  const dataConvertedToUppercase = await convertingToUppercase;
  //console.log(dataConvertedToUppercase);

  let writingToNewFile = new Promise((resolve, reject) => {
    fs.writeFile(uppercaseFileName, dataConvertedToUppercase, (error) => {
      if (!error) {
        resolve('converted to uppercase and written on a new file.');
      } else {
        reject('error writng the new file.');
      }
    });
  });

  addFileName(uppercaseFileName)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  const isConverstionSuccesfull = await writingToNewFile;
  console.log(isConverstionSuccesfull);
  return isConverstionSuccesfull;
}

module.exports = changeToUppercase;
