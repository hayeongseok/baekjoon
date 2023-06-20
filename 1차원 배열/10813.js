let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let box = input[0].split(' ')[0];
let count = input[0].split(' ')[1];
let arr = [];

for(let i = 1; i <= box; i++) {
    arr.push(i)
}

for(let j = 1; j <= count; j++) {
    let a = arr[Number(input[j].split(' ')[0] - 1)]
    let b = arr[Number(input[j].split(' ')[1] - 1)]
    arr[Number(input[j].split(' ')[0]) - 1] = b
    arr[Number(input[j].split(' ')[1]) - 1] = a
}

console.log(arr.join(' '))
