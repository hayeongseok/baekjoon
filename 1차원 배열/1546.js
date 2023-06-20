let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split('\n');

let count = Number(input[0])
let arr = input[1].split(' ').map(Number)
let max = arr.sort((a, b) => b - a)[0]
let total = 0;

for(let i of arr) {
    total += i/max*100
}

console.log(total/count)