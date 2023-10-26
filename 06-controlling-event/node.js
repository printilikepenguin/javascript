// 유사배열객체? 배열처럼 생긴 객체
// 배열(Array), 객체(Object)
// 배열
// 관련있는 데이터들을 하나의 변수에 할당
// 자바스크립트에서는 명시적 타입이 없기 때문에 여러 자료형을 가질 수 있음
// 많은 methods들이 내장되어 있다.
const numbers = [1, 'test', {'name':'test'}]
// key로 인덱스를 가짐
// 값을 각각 가지고 있음
// length 가지고 있음
// 유사배열객체(Array-like Object)
obj = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
}
console.log(numbers)
console.log(obj)

const liList = document.querySelectorAll('li')
// 대표적인 유사배열 객체
console.log(liList)
console.log(numbers)
// Array 객체인지 판별하기
console.log(Array.isArray(liList))
console.log(Array.isArray(numbers))

// 왜 유사배열객체를 사용할까?
// 배열보다 메모리가 효율적으로 관리됨
// 배열의 동작을 제한하거나, 가지고 있지 않은 동작을 추가하는 등 커스터마이징 가능
// 객체를 배열처럼 인덱스로 접근할 수 있다

// 주의사항
// map, filter 등의 배열 메서드 사용 못함
// forEach는 추가됨

// Array의 Methods를 사용하려면 Array로 형변환하면 됨
// 1.1 유사배열객체 -> 배열로 변환
// 1.1.1 Array.from
const array1 = Array.from(liList)
console.log(array1)

// 1.1.2 전개연산자(...) 사용
// object는 안된다
// NodeList 같은 iterable한 객체
const array2 = [...liList]
console.log(array2)

// 1.1.3 iterable 하지 않은 일반 객체
const array3 = Object.values(obj)
console.log(array3)

// 2. 얕복과 깊복
// 원시 타입 빼고는 다 얕은 복사
// 2.1. 함수로 사용할 때
function func(arr) {
  arr[0] = 10
}
let arr = [1,2,3]
func(ar)
console.log(arr)

{
  // 2.2. 복사할 때
  let numbers = [1,2,3]
  let newNumbers = numbers // 얕은 복사
  newNumbers[1] = 10
  console.log(numbers)
  console.log(newNumbers)
}

// 2.3. 깊은 복사할 때
{
  let numbers = [1,2,3]
  // 스프레드 연산자
  // 객체를 전개해서 각 요소를 개별적인 값으로 분리
  let newNumbers = numbers // 얕은 복사
  newNumbers[1] = 10
  console.log(numbers)
  console.log(newNumbers)
}

// 객체의 깊은 복사 
{
  const obj = {
    0: 1,
    1: 2,
    2: 3,
    lenght: 3
  }

  // 깊은 복사는 어떻게 할까?
  // 가장 간단한 방법은 JSON 활용
  // 문자열 변환 시 참조가 모두 끊어
  // 좀 느리다는 단점
  let neoObj = JSON.parse(JSON.stringify(obj))
  neoObj[0] = 10
  console.log(obj)
  console.log(neoObj)
  // 복잡한 방법은 재귀호출을 이용한 법이 잇는데 안씀
}
// https://bbangson.tistory.com/78

// 2차원 이상의 배열 깊은 복사 하는 방법? 찾아보셍용