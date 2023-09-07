const callbackFunction = require('./1-CallbackFunction');
const promiseFunction = require('./2-PromisesFunction');
const asyncAwaitFunction = require('./3-AsyncAwaitFunction');

const numberOfFiles = 3;
const directoryPathCallbacks = './Directories/CALLBACKS';
const directoryPathPromises = './Directories/PROMISES';
const directoryPathAsyncAwait = './Directories/ASYNC';

const result = callbackFunction(numberOfFiles, directoryPathCallbacks);
const result2 = promiseFunction(numberOfFiles, directoryPathPromises);
const result3 = asyncAwaitFunction(numberOfFiles, directoryPathAsyncAwait);

console.log(
  '*******************************************************************'
);
console.log(result);
console.log(
  '*******************************************************************'
);
console.log(result2);
console.log(
  '*******************************************************************'
);
console.log(result3);
console.log(
  '*******************************************************************'
);
