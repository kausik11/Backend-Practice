const fs = require('node:fs');
const { mkdir, writeFile, appendFile } = require('node:fs/promises');

const Biodata = {
    name: 'hello',
    lname: 'world',
    age:'26',
    channel : 'thapa technical'
};

let a = JSON.stringify(Biodata);

// try {
//   mkdir('D:/Express JS Prac/Practice/JSON_Node/NewFile',{recursive:true},()=>{})
//    fs.appendFileSync('D:/Express JS Prac/Practice/JSON_Node/NewFile/new.txt',a,'utf8',(err)=>{
//      console.log(err);
//    });
// } catch (error) {
//     console.log(error)
// }

// fs.readFileSync('D:/Express JS Prac/Practice/JSON_Node/NewFile/new.txt','utf-8',(err,data)=>{
//     console.log(data);
//     return data;
// });

fs.writeFile('new.txt',a,(err)=>{
    console.log(err);
});

//A path to a file is first option. If a URL is provided, it must use the file: protocol. If a file descriptor is provided, the underlying file will not be closed automatically.
fs.readFile('new.txt','utf-8',(err,data)=>{
    console.log(JSON.parse(data));
})





