const fs = require('fs');
const promiseFs = require('fs').promises;

const writeFilePath = 'writeFile.txt';


// 書き込みはあとで
function writeFile() {
  const data = "Data書き込み1";
  fs.writeFile(writeFilePath, data, (err) => {
    if (err) { throw err; }
    console.log('writeFile end');
  });
  console.log('function end');
}

// 書き込みを待ってから、次の処理
function writeFileSync() {
  try {
    const data = fs.writeFileSync(writeFilePath, "Data書き込み2");
    console.log('try end');
  } catch (err) {
    console.log(err);
    console.log('catch end');
  }
  console.log('function end');
}

// 書き込みはあとで（深いネストを避けられる記述）
function writeFilePromise() {
  promiseFs
    .writeFile(writeFilePath, "Data書き込み3")
    .then((data) => {
      console.log('then end');
    })
    .catch((err) => {
      console.log(err);
      console.log('catch end');
    });
  console.log('function end');
}

// 書き込みを待ってから、次の処理
async function writeFileAsyncAwait() {
  try {
    const data = await promiseFs.writeFile(writeFilePath, "Data書き込み4");
    console.log('try end');
  } catch (err) {
    console.log(err);
    console.log('catch end');
  }
  console.log('function end');
}

// 
function myWriteFilePromise() {
  return new Promise((resolve, reject) => {
    fs.writeFile(writeFilePath, '書き込み5', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('data');
      }
    });
  });
}

async function myWriteFileAsyncAwait() {
  try {
    const data = await myWriteFilePromise();
    console.log(data);
    console.log('try end');
  } catch (err) {
    console.log(err);
    console.log('catch end');
  }
  console.log('function end');
}

myWriteFileAsyncAwait();
