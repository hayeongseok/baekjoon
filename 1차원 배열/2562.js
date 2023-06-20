let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');
let arr = [];
let result = '';

for(let i = 0; i < 9; i++) {
    arr.push(Number(input[i]))
}

result = Math.max(...arr) 
    
console.log(Math.max(...arr) + '\n' + (Number(arr.indexOf(Math.max(...arr))) + 1))