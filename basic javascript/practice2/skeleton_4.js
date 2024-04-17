const roles = ['주연', '조연', '주연', '우정', '우정', '조연']
const names = ['김씨', '이씨', '박씨', '홍씨', '정씨', '서씨']

length = 0;
for (const name of names) {
    ++length;
}
console.log(length)

for (let i = 0; i < length; i++) {
    if (roles[i] === '주연') {
        console.log(`주연: ${names[i]} 님 반갑습니다!`)
    } else if (roles[i] === '조연') {
        console.log(`${names[i]} 님 환영합니다!`)
    } else {
        console.log(`${names[i]} 님 와 주셔서 감사합니다!`)
    }
}