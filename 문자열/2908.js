let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split(' ');

let arr = []

for(let i = 0; i < input.length; i++) {
    let result = input[i].split('')
    let reverse = result.reverse();
    result = reverse.join('')
    arr.push(result)
}

console.log(Math.max(...arr))



