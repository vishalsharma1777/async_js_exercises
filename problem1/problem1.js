const callbackFunction = require('./callbackFunction');
const promiseFunction = require('./promisesFunction');
const asyncAwaitFunction = require('./AsyncAwaitFunction');

const numberOfFiles = 4;
const directoryPathCallbacks = './CALLBACKS';
const directoryPathPromises = './PROMISES';
const directoryPathAsyncAwait = './ASYNC';

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
