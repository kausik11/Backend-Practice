const path = require('node:path'); 

let a = path.parse('D:/Express JS Prac/Practice/index.js');
console.log(a);

console.log(path.isAbsolute('D:/Express JS Prac/Practice/index.js')); 




const { createHmac } = require('node:crypto');

const secret = 'kausik';
const hash = createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);