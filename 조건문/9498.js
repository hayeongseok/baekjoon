let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim();
let num = parseInt(input)
console.log(num)
if(90 <= num || num >= 100) {
    console.log('A')
} else if (80 <= num >= 89) {
    console.log('B')
} else if (70 <= num >= 79) {
    console.log('C')
} else if (60 <= num >= 69) {
    console.log('D')
} else {
    console.log('F')
}