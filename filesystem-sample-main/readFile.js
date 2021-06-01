const fs = require('fs');
const promiseFs = require('fs').promises;

const readFilePath = './readFile.txt';

function readFile() {
  fs.readFile(readFilePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
    console.log('callback end');
  });
  console.log('function end');
}

function readFileSync() {
  try {
    const data = fs.readFileSync(readFilePath, { encoding: 'utf-8' });
    console.log(data);
    console.log('try end');
  } catch (err) {
    console.log(err);
    console.log('catch end');
  }
  console.log('function end');
}

function readFilePromise() {
  promiseFs
    .readFile(readFilePath, { encoding: 'utf-8' })
    .then((data) => {
      console.log(data);
      console.log('then end');
    })
    .catch((err) => {
      console.log(err);
      console.log('catch end');
    });
  console.log('function end');
}

async function readFileAsyncAwait() {
  try {
    const data = await promiseFs.readFile(readFilePath, { encoding: 'utf-8' });
    console.log(data);
    console.log('try end');
  } catch (err) {
    console.log(err);
    console.log('catch end');
  }
  console.log('function end');
}

function myReadFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(readFilePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function myReadFileAsyncAwait() {
  try {
    const data = await myReadFilePromise();
    console.log(data);
    console.log('try end');
  } catch (err) {
    console.log(err);
    console.log('catch end');
  }
  console.log('function end');
}

readFile();
