//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

// let A = parseInt(input[0])
// let B = parseInt(input[1])

console.log(input[0] * input[1][2])
console.log(input[0] * input[1][1])
console.log(input[0] * input[1][0])
console.log(input[0] * input[1])