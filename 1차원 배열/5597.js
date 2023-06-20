let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n')
input = input.map(Number)

let arr = [];
for(let i = 1; i <= 30; i++) {
    arr.push(i)
}

let result = arr.filter(x => !input.includes(x))

console.log(result.join('\n'))
console.log(1%42)