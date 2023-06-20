let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split(' ');

let N = Number(input[0])

for(let i = 1; i <= 9; i++) {
    console.log(N + ' * ' + i + ' = ' + N*i)
}