let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let h = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let time = Number(input[1])
let addH

m = m + time

if(m >= 60) {
    addH = parseInt(m/60)
    //h = (h + addH)%24
    m = m%60
}

console.log((h + addH)%24, m)