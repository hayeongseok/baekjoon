let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split(' ');
let result = [];
let count = 2*input-1
let test = '';

for(let i = 0; i < Math.ceil((2*input-1)/2); i++) {
    if(i == 0) {
        result.push('*'.repeat(2*input-1))
    } else {
        count = count - 2
        test = ' '.repeat(i)+ '*'.repeat(count)
        result.unshift(test)
        result.push(test)
    }
}

console.log(result.join('\n'))

