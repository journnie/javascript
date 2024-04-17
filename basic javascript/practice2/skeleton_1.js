// const name_str = '김씨'
// const age = 50
// name_str = '이씨'  const로 선언해서 재할당이 안되는 거 보는 거?

let name_str = '김씨'
let age = 50
console.log(typeof name_str, typeof age);

name_str = '이씨'

console.log(name_str);

// if name_str == '이씨' and age == 50:
//   console.log(f'{name_str}의 나이는 {age}살 입니다.')
//         let new_age = age
//   new_age += 10
// console.log(f'10년이 지나 이제 {name_str}는/은 {new_age}살이 되었습니다.')

if (name_str === '이씨' && age === 50) {
    console.log(`${name_str}의 나이는 ${age}살 입니다.`)
    let new_age = age
    new_age += 10
    console.log(`10년이 지나 이제 ${name_str}는/은 ${new_age}살이 되었습니다.`)

}
