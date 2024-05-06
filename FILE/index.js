const { Dirent, appendFileSync, readFileSync, renameSync, unlinkSync, rmdirSync } = require('node:fs');
const { mkdir } = require('node:fs/promises');
const { join } = require('node:path');
const {fs,writeFile} = require('fs');
const { existsSync } = require('node:fs') ;
const { isUtf8 } = require('node:buffer');

//check if the file exist, if not then create the directory
if (!existsSync('D:/Express JS Prac/Practice/FILE/test')) {
    MakeDir().catch(
        (err)=>{
            console.log(err);
        }
    )
}else{
    console.log('Directory is already exist')
}
async function MakeDir(){
    const projectFolder = join(__dirname, 'test');
    const dirCreation = await mkdir(projectFolder, { recursive: true });

    console.log(dirCreation);
    return dirCreation;
}

let filePath = 'D:/Express JS Prac/Practice/FILE/test/message.txt';
try {
    appendFileSync(filePath, 'Hello Node.js written by kausik', 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });  
    
} catch (error) {
    console.log(error);   
}

//with in read if no encoding is specified then the raw buffer is returned
// const data = readFileSync('D:/Express JS Prac/Practice/FILE/test/message.txt','utf-8');
// console.log(data);

//rename the file and add a callback to set the filepath to newfilepath and console it
let newFilePath = 'D:/Express JS Prac/Practice/FILE/test/mymessage.txt';
renameSync(filePath,newFilePath,(()=>{
    filePath = newFilePath;
    console.log(filePath)
})());

//delete the file
// unlinkSync(filePath);


