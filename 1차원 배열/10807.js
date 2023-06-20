let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');


console.log(input[1])
console.log(input[1].split(' '))
console.log(input[1].split(' ').filter(num => num == input[2]).length)