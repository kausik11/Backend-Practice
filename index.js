// const {faker} = require('@faker-js/faker');

// const { unlink } = require('node:fs/promises');
// const fs = require('fs');

// faker.seed(123);

// // const randomName = faker.person.fullName();
// // console.log(randomName);


// const firstRandom = faker.number.int();

// // Setting the seed again resets the sequence.
// faker.seed(123);

// const secondRandom = faker.number.int();

// console.log(firstRandom === secondRandom);

// var myObject = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// var jsonString = JSON.stringify(myObject);
// console.log(myObject);

// const url = require('node:url');
// const myURL =
//   url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
//   console.log(myURL);



// (async function(path) {
//   try {
//     await unlink(path);
//     console.log(`successfully deleted ${path}`);
//   } catch (error) {
//     console.error('there was an error:', error.message);
//   }
// })('D:/Express JS Prac/Practice/demo.txt');


// fs.writeFileSync('first.txt','My first file of node js');


//Os Module
const os = require('node:os');
//Returns an estimate of the default amount of parallelism a program should use. Always returns a value greater than zero.
console.log(os.availableParallelism());

//Returns the operating system CPU architecture for which the Node.js binary was compiled
console.log(os.arch());

console.log(os.cpus())
// Returns the amount of free system memory in bytes as an integer.
let a = os.freemem();
let megabytes = a/(1024*1024);
console.log(megabytes);

console.log(os.homedir());

console.log(os.hostname());

console.log(os.networkInterfaces());
let time = os.uptime();
let min = time/60;
console.log(min);
