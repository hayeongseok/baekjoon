//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split(' ');

let A = parseInt(input[0])
let B = parseInt(input[1])
let C = parseInt(input[2])

console.log(A + B + C)