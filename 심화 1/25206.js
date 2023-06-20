let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split('\n');

let num = 0;
let total = 0;

for (let i = 0; i < 20; i++) {
    let N = Number(input[i].split(' ')[1])
    let M = input[i].split(' ')[2].trim()

    if(M != 'P') {
        total += N
    }
    

    if (M == 'A+') {
        num += N * 4.5
    } else if (M == 'A0') {
        num += N * 4.0
    } else if (M == 'B+') {
        num += N * 3.5
    } else if (M == 'B0') {
        num += N * 3.0
    } else if (M == 'C+') {
        num += N * 2.5
    } else if (M == 'C0') {
        num += N * 2.0
    } else if (M == 'D+') {
        num += N * 1.5
    } else if (M == 'D0') {
        num += N * 1.0
    } else if (M == 'F') {
        num += N * 0.0
    }
}

console.log((num / total).toFixed(6))