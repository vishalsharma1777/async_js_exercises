const addFileName = require('./util/addFileName');
const readData = require('./util/readData');
const { conversionToUppercase } = require('./util/conversion');
const writingToANewFile = require('./util/writingToANewFile');

async function changeToUppercase(lowercaseFileAddress, uppercaseFile) {
  const dataToBeConverted = await readData(lowercaseFileAddress);
  const dataConvertedToUppercase =
    await conversionToUppercase(dataToBeConverted);

  let creatingNewFile = await writingToANewFile(
    uppercaseFile,
    dataConvertedToUppercase,
    'converted to uppercase and written on a new file.',
    'error writng the new file.'
  );

  let addingTheFileName = await addFileName(uppercaseFile);

  const value = 'THIS IS PART 1 OF PROBLEM 2';
  return { value, creatingNewFile, addingTheFileName };
}

// changeToUppercase('lipsum.txt', 'testing.txt').then((res) => {
//   console.log(res);
// });

module.exports = changeToUppercase;
