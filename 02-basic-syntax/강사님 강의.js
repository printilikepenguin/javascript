// 2. 문자열 비교
// JS에서 문자열은 원시타입, 객체처럼 쓰이는 문자열이 따로 있다
let str = 'test'
// new : 새로운 객체를 만들겠다 ! 
let str2 = new String('test')

console.log(typeof(str))     // string
console.log(typeof(str2))    // object

// JS는 내부적으로 원시타입에 대해 내장객체를 갖고 있다
// 원시타입 사용시 내장 객체로 해석해서 아래 코드 둘 다 돌아간다
console.log('test'.toUpperCase())    // TEST
console.log(str2.toUpperCase())      // Test

console.log(`1 = ${str == str2}`)     // true
console.log(`2 = ${str == str2}`)     // false
// 객체끼리의 비교: 주소값이 다르므로 false
console.log(`3 = ${str2 == new String('test')}`) // false

// 3. 문자열로 이뤄진 숫자
console.log(`1. = ${1 + 2}`)    // 3
// 정수 -> 문자열로 형변환됨
console.log(`2. = ${'1' + 2}`)  // 12
console.log(`3. = ${1 + '2'}`)  // 12
// 덧셈을 제외한 연산: 문자열 -> 숫자로 형변환됨
console.log(`4. = ${5 - '2'}`)  // 3
console.log(`5. = ${5 * '2'}`)  // 10
console.log(`6. = ${5 / '2'}`)  // 2.5
// 헷갈림 주의
console.log('10' * 3 + '10' - 2) // 3008
console.log('10' * 3 + '10' / 2) // 35

// 4. Boolean 형변환
let str3 = 'hi'
let bool = true
// 문자열로 형변한되어서 계산
console.log(str3 + bool)  // hitrue
console.log(str3 - bool)  // NaN
console.log(str3 * bool)  // NaN
// true: 1, false: 0으로 계산됨
console.log(3 + false)    // 3
console.log(3 - true)     // 2
console.log(3 / 0)     // Infinity

// 스코프
// 함수, 변수에 접근할 수 있는 범위
// 변수, 함수 호출 or 참조 시
// 1. 내가 현재 있는 스코프를 가장 먼저 탐색
// 2. 없다면 상위 스코프를 탐색
// 스코프 종류
//     전역, 로컬(블록, 함수)

let scope1 = 10
let scope2 = 30
// 블록 스코프: 중괄호로 둘러쌓인 범위
{
  console.log(scope1)
  // let 사용시 버그, var 사용시 밖에서 찾아옴
  let scope1 = 20
  console.log(scope1)
  console.log(scope2)
}

// 버그 이유를 명확히 알아야 한다
if (true) {
  let inner_data = 10
}

{
  console.log(inner_data)
}