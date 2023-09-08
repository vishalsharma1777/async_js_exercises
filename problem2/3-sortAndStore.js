const addFileName = require('./util/addFileName');
const readSortAndWrite = require('./util/readSortAndWrite');
const filesToBeSorted = require('./util/filesToBeSorted');

async function sortFileContent() {
  const fileNamesToBeSorted = await filesToBeSorted('sentences');

  for (let i = 1; i <= fileNamesToBeSorted.length; i++) {
    const fileName = `./sentences/sentence${i < 10 ? '0' : ''}${i}.txt`;
    await readSortAndWrite(fileName)
      .then(() => {
        console.log(`File sentence${i}.txt sorted and added.`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addFileName('sort.txt');
  const value = 'THIS IS PART 3 OF PROBLEM 2';
  const action = 'ALL THE FILES WERE SORTED';
  const Resolved = 'SORT.TXT FILE NAME WAS ADDED';

  return { value, Resolved, action };
}
module.exports = sortFileContent;
