const ages = [18, 20, 21, 29, 11, 31]
const names = ['홍길동', '이춘향', '금나래', '장보고', '임꺽정', '강감찬']
/*
  배열 ages를 순회하여 값이 20미만인 경우만 출력하는 코드를 작성하시오.
  forEach를 활용하여 구현한다.
  ex)
  18
  11
*/
console.log(`### if with for loop`)

for (let age of ages) {
    if (age < 20) {
        console.log(age)
    }
}

console.log(`### if with function`)

function ageUnderTwenty(age) {
    if (age < 20) {
        return age
    }
}
ages.forEach(age => {
    console.log(ageUnderTwenty(age))
})


console.log(`### if with callBackFunc`)

const callBackFunc = (age) => {
    if (age < 20) {
        console.log(age)
    }
};
ages.forEach(callBackFunc)

/*
  길이가 서로 같은 배열 ages와 names를 활용하여 새로운 배열 actors를 완성하시오.
  배열 actors는 age와 name을 키로 가지는 객체들로 구성한다.
  각 객체는 names와 ages의 요소들을 index 순으로 매칭시켜, 각각 name과 age 키에 할당하여 구성한다.
  ex)
  [
    {age: 18, name: '홍길동'}
    {age: 20, name: '이춘향'}
    ...
  ]
*/
let actors = []
for (let i=0; i < ages.length; i++) {
    actors.push({'age': ages[i], 'name': names[i]})
}
console.log(actors)
