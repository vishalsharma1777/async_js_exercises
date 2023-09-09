const fs = require('fs');

function splitingToSentences(i, arrayOfSentences) {
  return new Promise((resolve, reject) => {
    const fileName = `./sentences/sentence${i < 10 ? '0' : ''}${i}.txt`;
    fs.writeFile(fileName, arrayOfSentences[i - 1], (error) => {
      if (!error && arrayOfSentences[i - 1] != '') {
        //console.log(`file ${fileName} created`);
        resolve(`./sentences/sentence${i}.txt`);
      } else {
        //console.log('cant create files');
        reject();
      }
    });
  });
}

module.exports = splitingToSentences;
