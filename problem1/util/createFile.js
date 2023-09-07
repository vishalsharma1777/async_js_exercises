const fs = require('fs');

const createFile = (address) => {
  const created = new Promise((resolve, reject) => {
    let data = JSON.stringify(Math.random() * 1000);
    fs.writeFile(address, data, (error) => {
      if (!error) {
        resolve(`File ${address} created succesfully`);
      } else {
        reject(error);
      }
    });
  });
  return created;
};

module.exports = createFile;
