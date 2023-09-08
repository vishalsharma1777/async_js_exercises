//const createFile = require('./util/createFile');
const changeToUppercase = require('./1-toUppercase');
const spiltFilesFunction = require('./2-splitFiles');
const sortFileContent = require('./3-sortAndStore');
const deleteFilesFromFilenames = require('./4-deleteFiles');

const lowercaseFileName = 'lipsum.txt';
const uppercaseFileName = 'uppercase.txt';
const deletingAddress = 'filenames.txt';

// createFile('./lipsum.txt', 5).then(() => {
//   console.log('File created');
//   return;
// });
async function main() {
  changeToUppercase(lowercaseFileName, uppercaseFileName)
    .then((res) => {
      setTimeout(() => {
        console.log(res);
      }, 3000);
      return spiltFilesFunction(uppercaseFileName);
    })
    .then((res) => {
      setTimeout(() => {
        console.log(res);
      }, 4000);
      return sortFileContent();
    })
    .then((res) => {
      setTimeout(() => {
        console.log(res);
      }, 5000);
      return deleteFilesFromFilenames(deletingAddress);
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    value: 'THIS IS PART 5 OF PROBLEM 2',
    isResolved: 'THROUGH ONE COMMAND ALL THE ACTIONS ARE PERFORMED.',
    action: 'DONE THE PROBLEM 2 HURRAY!!!'
  };
}

main()
  .then((res) => {
    setTimeout(() => {
      console.log(res);
    }, 7000);
  })
  .catch((error) => console.log(error));
