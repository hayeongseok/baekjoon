let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split('\n');

console.log(input[0][Number(input[1]) - 1])

console.log(input[0].length)