let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let count = input[0]
let result = ''

for(let i = 1; i <= count; i++) {
    let A = Number(input[i].split(' ')[0])
    let B = Number(input[i].split(' ')[1])
    result += A + B + '\n'
}

console.log(result)
