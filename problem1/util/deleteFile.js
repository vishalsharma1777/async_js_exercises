const fs = require('fs');

const deleteFile = (address) => {
  const deleted = new Promise((resolve, reject) => {
    fs.unlink(address, (error) => {
      if (!error) {
        resolve(`File ${address} deleted yooo.`);
      } else {
        reject(`File ${address} cant be deleted`, error);
      }
    });
  });
  return deleted;
};

module.exports = deleteFile;
