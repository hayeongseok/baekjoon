let fs = require('fs');
let input = fs.readFileSync('t.txt').toString().trim().split('\n');

let total = input[0]
for(let i = 1; i <= total; i++) {
    let count = Number(input[i].split(' ')[0])
    let arr = input[i].split(' ').map(Number)
    arr.shift()

    const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

    let num = arr.filter((x) => x > average(arr))
    console.log((num.length / arr.length * 100).toFixed(3) + '%')
}
