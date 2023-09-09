const addFileName = require('./util/addFileName');
const { conversionToLowercase } = require('./util/conversion');
const writeToANewFile = require('./util/writeToANewFile');
const splitToSentences = require('./util/splitToSentences');

async function spiltFilesFunction(uppercaseData, uppercaseFile) {
  const dataConvertedToLowercase = await conversionToLowercase(uppercaseData);

  let reWriteTheUppercase = await writeToANewFile(
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
    await splitToSentences(x, arrayOfSentences);
    const fileName = `./sentences/sentence${x < 10 ? '0' : ''}${x}.txt`;
    addFileName(fileName);
  }

  const value = 'THIS IS PART 3 OF PROBLEM 2';
  const action = 'SPLITTED THE FILES SENTENCE WISE.';
  return { value, reWriteTheUppercase, action };
}

module.exports = spiltFilesFunction;
