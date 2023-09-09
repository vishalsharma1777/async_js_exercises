const readData = require('./util/readData');

async function readFileData(lowercaseFileAddress) {
  const data = await readData(lowercaseFileAddress);

  const value = 'THIS IS PART 1 OF PROBLEM 2';
  const action = 'Read the contents of lipsum.txt';
  return { value, data, action };
}

module.exports = readFileData;
