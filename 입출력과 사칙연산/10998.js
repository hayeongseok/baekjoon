//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split(' ');

console.log(input[0] + input[1] + '\n' + input[0]-input[1] + '\n' + input[0] * input[1] + '\n' + Math.floor(input[0]/input[1]) + '\n' + input[0]%input[1])