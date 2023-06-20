let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let count = Number(input[0]);
let arr = input[1];
let result = 0;


for(let i = 0; i < count; i++) {
    result += Number(input[1][i])
}

console.log(result)