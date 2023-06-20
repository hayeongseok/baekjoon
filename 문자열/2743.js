let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split('\n');

let count = Number(input[0])
for(let i = 1; i <= count; i++){
    let str = input[i].trim()
    console.log(input[i][0] + '' + str[str.length - 1])
}