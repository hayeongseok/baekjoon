let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let t = input[0]

for(let i = 1; i <= t; i++) {
    let A = Number(input[i].split(' ')[0])
    let B = Number(input[i].split(' ')[1])
    
    console.log(A+B)
}
