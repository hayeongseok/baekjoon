let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split('\r\n');

let answer = '';
let a = 0;

for(let i = 0; i < input.length; i++) {
    if(a <= input[i].length) {
        a = input[i].length
    }
}

for(let i = 0; i < +a; i++) {
    for(let j = 0; j < input.length; j++) {
        if(input[j][i] !== undefined) {
            answer += input[j][i]
        }
    }
}

console.log(answer)
