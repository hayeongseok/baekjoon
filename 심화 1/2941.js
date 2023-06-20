let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim();

let count = 0;
let start = 0;
let end = 2;
let result = 'failed'

let str = ['c=', 'c-', 'dz', 'd-', 'lj', 'nj', 's=', 'z=']

for(let i = 0; end <= input.length + 1; i++) {
    let sub = input.slice(start, end)

    for(let j = 0; j < str.length; j++) {
        if(sub === str[j]) {
            if(input.slice(start, end + 1) === 'dz=') {
                count++
                start += str[j].length + 1
                end += str[j].length + 1
                result = 'success'
                break;
            } else if (sub != 'dz'){
                count++
                start += str[j].length
                end += str[j].length
                result = 'success'
                break;
            }
        }      
    }

    if(result !== 'success') {
        count++
        start += 1
        end += 1
    }

    result = 'failed'
}

console.log(count)
