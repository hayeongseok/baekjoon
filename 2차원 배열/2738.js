let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let m = Number(input[0].split(' ')[0]);
let n = Number(input[0].split(' ')[1]);

// 빈 값의 2차원 배열 생성
let arr = Array.from(Array(m), () => new Array(n))

// 2차원 배열에 값 넣기
for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
        arr[i][j] = Number(input[i + 1].split(' ')[j]) + Number(input[i + m + 1].split(' ')[j])
    }   
    arr[i] = arr[i].join(' ')
}
console.log(arr.join('\n'))


