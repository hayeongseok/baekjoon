let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])
let result 

if(a == b && b == c) {
    result = 10000 + a * 1000
} else if (a == b && b != c) {
    result = 1000 + a * 100
} else if (a != b && b == c) {
    result = 1000 + b * 100
} else if (a == c && b != c) {
    result = 1000 + c * 100
} else if (a != b && b != c && a != c) {
    result = Math.max(a, b, c) * 100
}

console.log(result)

