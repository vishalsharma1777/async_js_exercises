function conversionToUppercase(dataToBeConverted) {
  return new Promise((resolve, reject) => {
    if (!dataToBeConverted) {
      console.log('DATA CAN NOT BE CONVERTED TO UPPERCASE');
      reject("data can't be converted");
    } else {
      console.log('DATA CONVERTED TO UPPERCASE');
      resolve(dataToBeConverted.toUpperCase());
    }
  });
}
function conversionToLowercase(dataToBeConverted) {
  return new Promise((resolve, reject) => {
    if (!dataToBeConverted) {
      console.log('DATA CAN NOT BE CONVERTED TO lowercase');
      reject("data can't be converted");
    } else {
      console.log('DATA CONVERTED TO lowercase');
      resolve(dataToBeConverted.toLowerCase());
    }
  });
}

module.exports = { conversionToUppercase, conversionToLowercase };
