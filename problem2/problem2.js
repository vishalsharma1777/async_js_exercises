//const createFile = require('./util/createFile')
const readFileData = require('./1-readFile');
const changeToUppercase = require('./2-toUppercase');
const spiltFilesFunction = require('./3-splitFiles');
const sortFileContent = require('./4-sortAndStore');
const deleteFilesFromFilenames = require('./5-deleteFiles');

const lowercaseFileName = 'lipsum.txt';
const uppercaseFileName = 'uppercase.txt';
const deletingAddress = 'filenames.txt';

//createFile('testing.txt',5);

async function main() {
  try {
    const res0 = await readFileData(lowercaseFileName);
    setTimeout(() => {
      console.log({ value: res0.value, action: res0.action });
    }, 1000);

    const res1 = await changeToUppercase(res0.data, uppercaseFileName);
    setTimeout(() => {
      console.log({
        value: res1.value,
        action: res1.addTheFileName,
        outcome: res1.createNewFile
      });
    }, 1500);

    const res2 = await spiltFilesFunction(
      res1.uppercaseData,
      uppercaseFileName
    );
    setTimeout(() => {
      console.log(res2);
    }, 2000);

    const res3 = await sortFileContent();
    setTimeout(() => {
      console.log(res3);
    }, 2500);

    const res4 = await deleteFilesFromFilenames(deletingAddress);
    setTimeout(() => {
      console.log(res4);
    }, 3000);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      console.log({
        finally:
          'I TRIED MY BEST, THIS IS SHOWING IT, THIS WILL SHOW EVEN IF I FAIL OR I PASS'
      });
    }, 3500);
  }
  return {
    value: 'THIS IS COMBINATION OF ALL THE STEPS IN PROBLEM 2',
    isResolved: 'THROUGH ONE COMMAND ALL THE ACTIONS ARE PERFORMED.',
    action: 'DONE THE PROBLEM 2 HURRAY!!!'
  };
}

async function allProblems() {
  try {
    const res = await main();
    setTimeout(() => {
      console.log(res);
    }, 4000);
  } catch (error) {
    console.log(error);
  }
}

allProblems();
