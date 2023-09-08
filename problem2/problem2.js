const createFile = require('./util/createFile');
const changeToUppercase = require('./1-toUppercase');
const spiltFilesFunction = require('./2-splitFiles');
const sortFileContent = require('./3-sortAndStore');

const lowercaseFileName = 'lipsum.txt';
const uppercaseFileName = 'uppercase.txt';
const sortLocation = 'sentences';

createFile('./lipsum.txt', 5)
  .then(() => {
    console.log('File created');
    return changeToUppercase(lowercaseFileName, uppercaseFileName);
  })
  .then(() => {
    console.log('Uppercase conversion done');
    return spiltFilesFunction(uppercaseFileName);
  })
  .then(() => {
    console.log('File splitting done');
    setTimeout(() => {
      return sortFileContent(sortLocation);
    }, 10000);
  })
  .then(() => {
    console.log('Sorting and storing done');
  })
  .catch((error) => {
    console.log(error);
  });
