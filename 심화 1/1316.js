let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split('\n');

/*
let answer = 0;
let result = 0;

for(let i = 1; i < input.length; i++) {
    let arr = input[i].split('')
    if(i != input.length - 1 ) {
        arr.pop()
    }

    for(let j in arr) {
        idx = arr.indexOf(arr[j])

        if(result > idx) {
            break;
        }  else if(Number(j) + 1 === arr.length && result <= idx) {
            answer++
        } else if (result <= idx) {
            result = idx
        }
    }

    result = 0
}

console.log(answer)*/
const N = Number(input[0]);
let count = N;
let word;

for(let i=1; i <= N; i++) {
    word = input[i];
   
    for(let j=0; j < word.length-1; j++) {
        console.log(word.slice(j+1))
        
        console.log(word.slice(j+1).includes(word[j]))
        if( word[j] != word[j+1] && !!word.slice(j+1).includes(word[j]) ) {
            count--;
            break;
        }
    } 
}

console.log(count);