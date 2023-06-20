//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split(' ');
let result = 0;

for (let i = 0; i < input.length; i++) {
    result += input[i] * 1
}

console.log(result)