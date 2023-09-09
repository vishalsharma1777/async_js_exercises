const addFileName = require('./util/addFileName');
const { conversionToUppercase } = require('./util/conversion');
const writeToANewFile = require('./util/writeToANewFile');

async function changeToUppercase(dataToBeConverted, uppercaseFile) {
  const uppercaseData = await conversionToUppercase(dataToBeConverted);

  let createNewFile = await writeToANewFile(
    uppercaseFile,
    uppercaseData,
    'converted to uppercase and written on a new file.',
    'error writng the new file.'
  );

  let addTheFileName = await addFileName(uppercaseFile);

  const value = 'THIS IS PART 2 OF PROBLEM 2';
  return { value, createNewFile, addTheFileName, uppercaseData };
}

// changeToUppercase('lipsum.txt', 'testing.txt').then((res) => {
//   console.log(res);
// });

module.exports = changeToUppercase;
