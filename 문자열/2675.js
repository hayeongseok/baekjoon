let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let count = Number(input[0])
let result = ''

for(let i = 1; i <= count; i++) {
    console.log(input[i].split(' '))
    let num = Number(input[i].split(' ')[0])
    let str = input[i].split(' ')[1]
    
    for(let k = 0; k < str.length; k++) {
        for(let j = 0; j < num; j++) {
            result += str[k]
        }           
    }
    result += '\n'
}

console.log(result)



