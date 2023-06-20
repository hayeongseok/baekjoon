let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let box = Number(input[0].split(' ')[0])
let count = Number(input[0].split(' ')[1])
let arr = [];

for(let a = 0; a < box; a++) {
    arr.push(0)
}

for(let b = 1; b <= count; b++) {
    let start = Number(input[b].split(' ')[0]) - 1
    let end = Number(input[b].split(' ')[1]) - 1

    for(let c = start; c <= end; c++) {
        arr[c] = Number(input[b].split(' ')[2])
    }
}

console.log(arr.join(' '))
