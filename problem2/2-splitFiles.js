const fs = require('fs');
const { error } = require('console');
const addFileName = require('./util/addFileName');

async function spiltFilesFunction(uppercaseFileName) {
  let readData = new Promise((resolve, reject) => {
    fs.readFile(uppercaseFileName, 'utf-8', (error, data) => {
      if (error) {
        reject();
        return;
      } else {
        resolve(data);
      }
    });
  });

  const dataToBeConverted = await readData;

  let convertingToLowercase = new Promise((resolve, reject) => {
    if (!dataToBeConverted) {
      reject(error);
    } else {
      resolve(dataToBeConverted.toLowerCase());
    }
  });

  const dataConvertedToLowercase = await convertingToLowercase;
  //console.log(dataConvertedToUppercase);

  let changingToLowerCase = new Promise((resolve, reject) => {
    fs.writeFile(uppercaseFileName, dataConvertedToLowercase, (error) => {
      if (!error) {
        resolve('converted the contents of the file to lowercase.');
      } else {
        reject('error converting the new file.');
      }
    });
  });

  const dataToBeSplited = String(dataConvertedToLowercase);
  //console.log(dataToBeSplited);

  const sentence = '. ';
  const arrayOfSentences = dataToBeSplited.split(sentence);
  //console.log(arrayOfSentences);

  function testing(i) {
    fs.writeFile(
      `./sentences/sentence${i}.txt`,
      arrayOfSentences[i - 1],
      (error) => {
        if (!error) {
          console.log(`file sentence${i}.txt created`);
        } else {
          console.log('cant create files');
        }
      }
    );
  }

  for (let x = 1; x <= arrayOfSentences.length; x++) {
    setTimeout(() => {
      testing(x);
      addFileName(`sentences/sentence${x}.txt`);
    }, 0);
  }

  changingToLowerCase.then((res) => console.log(res));
}

module.exports = spiltFilesFunction;
