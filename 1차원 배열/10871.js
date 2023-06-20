let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let X = Number(input[0].split(' ')[1])
let arr = (input[1].split(' ')).filter(num => num < X)

console.log(arr.join(' '));