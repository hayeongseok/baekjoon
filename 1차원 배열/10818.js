let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');
// let arr = [];
let result = '';

let arr = input[1].split(' ').map(Number);
console.log(arr)
/*
arr = input[1].split(' ')

result = Math.min(...arr) + ' '
result += Math.max(...arr)

console.log(result)
*/




