let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');
let t = input[0]

for(let i = 1; i <= t; i++) {
    let a = input[i].split(' ')[0]
    let b = input[i].split(' ')[1]
    
    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`)
}
