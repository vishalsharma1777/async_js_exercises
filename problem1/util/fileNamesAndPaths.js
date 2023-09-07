const path = require('path');

const fileNamesAndPaths = (numberOfFiles, directoryPath) => {
  const generateFileNames = (numberOfFiles) => {
    const fileNames = [];
    for (let i = 1; i <= numberOfFiles; i++) {
      fileNames.push(`file${i}.json`);
    }
    return fileNames;
  };

  let filesToBeMade = generateFileNames(numberOfFiles);
  const filePaths = filesToBeMade.map((fileName) =>
    path.join(directoryPath, fileName)
  );

  //console.log(filePaths);
  return filePaths;
};

module.exports = fileNamesAndPaths;
