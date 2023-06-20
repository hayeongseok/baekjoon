let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let arr = [];
let A = '';
let B = '';
let answer = '';

for(let i = 0; i < 9; i++) {
    arr[i] = input[i].split(' ').map(Number)

    if(A <= Math.max(...arr[i])) {
        A = Math.max(...arr[i]) 
        B = '\n' + (+i + 1) + ' ' + (+arr[i].indexOf(A) + 1)

    }
}

answer = A + B
console.log(answer)