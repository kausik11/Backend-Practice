const { error } = require('console');
const fs = require('fs');
const { join } = require('path');
const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

console.log(__dirname);
console.log(__filename);
//we pass a callback function that gets called when the tasks completed and the callback has an argument that tells you whether the operation is completed sucssfully.
fs.writeFile(join(__dirname,'async_test.txt'),'it is a async file',(err)=>{
    if (err) {
        console.log(err);
    }
});

//add more file within the if condition that check the file is exists or not
try {
    if (fs.existsSync(join(__dirname,'async_test.txt'))) {
       fs.appendFile(join(__dirname,'async_test.txt'),'written by kausik saha and dev.',(err,data)=>{
       if (err) {
        console.log(err)
       }
        })   
    }
} catch (error) {
  console.log(error);   
}

//read the file content based on promise 
async function logFile() {
    try {
      const filePath = resolve(join(__dirname,'async_test.txt'));
      const contents = await readFile(filePath, { encoding: 'utf8' });
      console.log(contents);
    } catch (err) {
      console.error(err.message);
    }
  }
  logFile();