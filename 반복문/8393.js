let fs = require('fs');
let n = fs.readFileSync('../t.txt').toString()

let result = 0;

for(let i = 1; i <= n; i++) {
    console.log(i)
    result += i
}

console.log(result)