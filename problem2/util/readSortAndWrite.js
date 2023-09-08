const fs = require('fs');
function readSortAndWrite(address) {
  return new Promise((resolve, reject) => {
    fs.readFile(address, 'utf-8', (error, data) => {
      if (error) {
        reject();
        return;
      }
      const contentAfterSorting = data.split(' ').sort().join(' ');
      if (!contentAfterSorting || contentAfterSorting == '') {
        reject('file cant be sorted');
      }
      fs.appendFile('sort.txt', contentAfterSorting + '\n', (error) => {
        if (!error) {
          resolve();
        } else {
          reject('file cant be sorted');
        }
      });
    });
  });
}

module.exports = readSortAndWrite;
