const addFileName = require('./util/addFileName');
const readData = require('./util/readData');
const { conversionToLowercase } = require('./util/conversion');
const writingToANewFile = require('./util/writingToANewFile');
const splitingToSentences = require('./util/splittingToSentences');

async function spiltFilesFunction(uppercaseFile) {
  const dataToBeConverted = await readData(uppercaseFile);

  const dataConvertedToLowercase =
    await conversionToLowercase(dataToBeConverted);

  let reWritingTheUppercase = await writingToANewFile(
    uppercaseFile,
    dataConvertedToLowercase,
    'Read the new file and converted it to lower case',
    'error while rewriting with lowerCase'
  );

  const arrayOfSentences = String(dataConvertedToLowercase)
    .split('\n')
    .join('')
    .split('. ');

  for (let x = 1; x <= arrayOfSentences.length - 1; x++) {
    await splitingToSentences(x, arrayOfSentences);
    const fileName = `./sentences/sentence${x < 10 ? '0' : ''}${x}.txt`;
    addFileName(fileName);
  }

  const value = 'THIS IS PART 2 OF PROBLEM 2';
  const action = 'SPLITTED THE FILES SENTENCE WISE.';
  return { value, reWritingTheUppercase, action };
}

module.exports = spiltFilesFunction;
