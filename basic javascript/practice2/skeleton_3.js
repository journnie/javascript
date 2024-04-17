const scores = [100, 90, 80, 70, 60];
let length = scores.length;
console.log(length);

// for .. of 문으로 코드 작성
let sum = 0;
for (let i = 0; i < length; i++) {
    sum += scores[i];
}
console.log(sum)

console.log(sum / length)

// while문으로 코드 작성
while (length > 0) {
    console.log(scores[length-1])
    --length;
}
