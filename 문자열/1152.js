let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split(' ');

result = 0;

for(i = 0; i < input.length; i++){
    if(input[i].length >= 1) {
        result += 1
    }
}
console.log(result)