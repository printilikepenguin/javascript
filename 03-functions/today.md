## 데이터 타입의 종류 
1. 원시자료형
2. 참조자료형(Reference type) 
  - Objects(Object, Array, Function)
    - 키로 구분된 데이터 집합(data collections)을 저장하는 자료형
  - 객체의 주소가 저장되는 자료형(가변, 주소가 복사)
  
# Function 
참조 자료형에 속하며 모든 함수는 Function object

## 함수 구조
function 함수이름 (매개변수) {
  statement
}
return 없으면 undefined 반환

## 함수 정의 2가지 방법
1. 선언식(function declaration)
function add (num1, num2) {
  return num1 + num2
}

add(1, 2) // 3

2. 표현식(functino expression) <<< 사용 권장
const sub = function (num1, num2) {
  return num1 - num2
}

sub(2, 1) // 1
- 함수 이름이 없는 '익명 함수'를 사용할 수 있음
- 선언식과 달리 표현식으로 정의한 함수는 호이스팅? 되지 않으므로 함수를 정의하기 전에 먼저 사용할 수 없음

## 매개변수 정의 방법
1. 기본함수 매개변수 (Default function parameter)
- 값이 없거나 undefined가 전달될 경우 이름 붙은 매개변수를 기본값으로 초기화
const greeting = function (name = 'Anonymous') {
  return `Hi ${name}`
}
greeting() // Hi Anonymous

2. 나머지 매개변수
- 임의의 수의 인자를 '배열'로 허용하여 가변 인자를 나타내는 방법
- 작성 규칙
  - 함수 정의 시 나머지 매개변수 하나만 작성할 수 있음
  - 나머지 매개변수는 함수 정의에서 매개변수 마지막에 위치해야함
const myFunc = function (param1, param2, ...restPrams) {
  return [param1, param2, restPrams]
}
myFunc(1,2,3,4,5) // [1,2,[3,4,5]]
myFunc(1,2) // [1,2,[]]

- 만약 매개변수 개수 > 인자개수: 누락인자 undefined로 할당
- 만약 매개변수 개수 < 인자개수: 초과입력 인자 사용X

콜백함수는 화살표로 쓰자 ..

# Spread syntax
## '...'(Spread syntax) : 전개 구문
- 배열이나 문자열과 같이 반복 가능한 항목을 펼치는 것(확장, 전개)
- 전개 대상에 따라 역할이 다름
    배열이나 객체의 요소를 개별적인 값으로 분리하거나, 다른 배열이나 객체의 요소를 현재 배열이나 객체에 추가하는 등

1. 함수와의 사용: 
  - 함수 호출 시 인자 확장
function myFunc(x,y,z) {
  return x+y+z
}
let numbers = [1,2,3]
console.log(myFunc(...number)) // 6
> 배열 'numbers'를 전개하여 함수에 전달 
> 코드의 간결한 작성 가능

  - 나머지 매개변수(압축)
function myFunc2(x,y, ...restArgs) {
  return [x,y,restArgs]
}
console.log(myfunc2(1,2,3,4,5)) // [1,2,[3,4,5]]
console.log(myfunc2(1,2)) // [1,2,[]]
> '...restArgs'는 나머지 매개변수로, 함수에 전달된 인자중 'x', 'y'를 제외한 나머지 인자들을 배열로 수집한다
2. 객체와의 사용(객체 파트에서 진행)
3. 배열과의 활용(배열 파트에서 진행)

# 화살표 함수 표현식
Arrow function expressions: 함수 표현식의 간결한 표현법

const arrow = function (name) {
  return `hello, ${name}`
}
=
const arr = name => `hello, ${name}`

## 작성과정
1. function 키워드 제거 후 매개변수와 중괄호 사이에 화살표(=>) 작성
2. 함수의 매개변수가 하나 뿐이라면, 매개변수의 '()' 제거가능(벗 생략X를 권장)
3. 함수 본문의 표현식이 한 줄이라면, '{}'와 'return' 제거가능
```
const arrow1 = function (name) {
  return `hello, ${name}`
}

// 1. function 키워드 삭제 후 화살표 작성
const arrow2 = (name) => {return `hello, ${name}`}

// 2. 인자가 1개일 경우에만 () 생략 가능
const arrow3 = name => {return `hello, ${name}`}

// 3. 함수 본문이 return을 포함한 표현식 1개일 경우에 {} & return 삭제가능
const arrow4 = name => `hello, ${name}`
```

1. 인자가 없다면 () or _로 표시 가능
const noArgs1 = () => 'No args'
const noArgs2 = _ => 'No args'
2. object를 return 한다면 return을 명시적으로 작성해야함
const returnObject1 = () => { return { key: 'value'}}
3. return을 작성하지 않으려면 객체를 소괄호로 감싸야함
const returnObject2 = () => ({ key: 'value'})

# Object
키로 구분된 데이터 집합(data collection)을 저장하는 자료형

```
const user = {
  name: 'Alice',
  'key with space': true,
  greeting: function () {
    return 'hello
  },
}
```

## 객체 구조
- 중괄호를 이용해 작성
- 중괄호 안에는 key: value 쌍으로 구성된 속성(property)를 여러개 작성가능
- key는 문자형만 허용
- value는 모든 자료형 허용

## 객체 속성
- 점('.', chaining operator) 또는 대괄호([])로 객체 요소 접근
- key 이름에 띄어쓰기 같은 구분자가 있으면 대괄호 접근만 가능
// 조회
console.log(user.name) // Alice
console.log(user['key with spae']) // true

// 추가
user.address = 'korea'
console.log(user) // 

- 'in' 연산자
console.log('greeting' in user) // true
console.log('country' in user) // false

## 객체와 함수
- Method 객체 속성에 정의된 함수
- Method 사용 예시
  - object.method() 방식으로 호출
  - 메서드는 객체를 '행동'할 수 있게 함
  - console.log(user.greeting()) // hello

### this 키워드
객체에 대한 특정한 작업을 수행할 수 있음
함수나 메서드를 호출한 객체를 가리키는 키워드
함수 내에서 객체의 속성 및 메서드에 접근하기 위해 사용

- JavaScript에서 this는 함수가 '호출되는 방식'에 따라 결정되는 현재 객체를 나타냄
- JavaScript의 함수는 호출될 때 this를 암묵적으로 전달받음
- Python의 self와 Java의 this가 선언 시 값이 이미 정해지는 것에 비해 JavaScript의 this는 함수가 호출되기 전까지 값이 할당되지 않고 호출시에 결정됨(동적할당)

#### 기억해야할 것
1. object에서는 화살표 함수를 쓰지말자!
const tmpObj = {
  name: "test",
  myFunc() {
    console.log(this.name)
  }
}
2. 콜백 함수에서는 화살표 함수를 쓰자
numbers.forEach((element) => {
  console.log(element)
})

### 장단점
1. 장점: 함수(메서드)를 하나만 만들어 여러 객체에서 재사용할 수 있다는 것
2. 단점: 이런 유연함이 실수로 이어질 수 있다는 점

const person = {
  name: 'Alice',
  greeting: function () {
    return `Hello my name is ${this.name}`
  },
}
console.log(person.greeting()) // Hello my name is Alice

JavaScript에서 this는 함수를 '호출하는 방법'에 따라 가리키는 대상이 다름
| 호출방법 |  대상  |
|---------|--------|
| 단순호출 |전역객체|
|메서드호출|메서드호출한객체|

1. 단순호출시 this
  - 가리키는 대상 → 전역객체
const myFunc = function () {
  return this  
}
console.log(myFunc()) // window

1. 메서드 호출시 this
  - 가리키는 대상 → 메서드를 호출한 객체
const myObj = {
  data: 1,
  myFunc: function () {
    return this
  }
}
console.log(myObj.myFunc()) // myObj

1. 중첩된 함수에서의 this 문제점과 해결책
```
const myObj2 = {
  numbers: [1,2,3],
  myFunc: function () {
    this.numbers.forEach(function (number) {
      console.log(this) // window
    })
  }
}
console.log(myObj2.myFunc())
```
- forEach의 인자로 작성된 콜백 함수는 일반적인 함수 호출이기 때문에 this가 전역 객체를 가리킴
```
const myObj3 = {
  numbers: [1,2,3],
  myfunc: function() {
    this.numbers.forEach((number) => {
      console.log(this) // myObj3
    })
  }
}
console.log(myObj3.myFunc())
```
- 화살표 함수는 자신만의 this를 가지지 않기 때문에 외부함수에서의 this값을 가져옴

# 추가 객체 문법(*****) 꼭 알아야함
1. 단축 속성
- 키 이름과 값으로 쓰이는 변수의 이름이 같은 경우 단축 구문을 사용할 수 있음
2. 단축 메서드
- 메서드 선언시 function 키워드 생략 가능
3. 계산된 속성(computed property name)
- 키가 대괄호([])로 둘러싸여있는 속성
- 고정된 값이 아닌 변수 값을 사용할 수 있음
4. 구조 분해 할당(destructing assignment)
- 배열 또는 객체를 분해하여 속성을 변수에 쉽게 할당할 수 있는 문법
5. Object with '전개구문'
- '객체복사' 객체 내부에서 객체 전개
6. 유용한 객체 메서드
- Object.keys()
- Object.values()
7. Optional chainng ('?.')
- 속성이 없는 중첩 객체를 에러없이 접근할 수 있음
- 만약 참조 대상이 null 또는 undefined라면 에러가 발생하는 것 대신 평가를 멈추고 undefined를 반환
- Optional chaining이 없다면 다음과 같이 '&&' 연산자를 사용해야함
- 참조가 누락될 가능성이 있는 경우 연결된 속성으로 접근할 때 더 짧고 간단한 표현식을 작성할 수 있음
- 어떤 속성이 필요한지에 대한 보증이 확실하지 않는 경우에 객체의 내용을 보다 편리하게 탐색할 수 있음
- 존재하지 않아도 괜찮은 대상에만 사용해야 함(남용 X)
  - 왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용
  - 앞의 변수는 반드시 선언되어 있어야 함
- 요약
  - obj?.prop : obj 존재하면 obj.prop 반환하고, 그렇지 않으면 undefined 반환
  - obj?.[prop] : obj 존재하면 obj[prop] 반환하고, 그렇지 않으면 undefined 반환
  - obj?.method() : obj 존재하면 obj.method() 호출하고, 그렇지 않으면 undefined 반환

## JSON : JavaScript Object Notation
- Key-Value 형태로 이루어진 자료 표기법
- JavaScript의 Object와 유사한 구조를 갖고 있지만 JSON은 형식있는 '문자열'
- JavaScript에서 JSON을 사용하기 위해서는 Object 자료형으로 변경해야함

```
const jsObject = {
  coffee: 'Americano',
  iceCream: 'Cookie and cream',
}

// Object -> JSON
const objToJson = JSON.stringify(jsObject)
console.log(objToJson)
console.log(typeof objToJson)

// JSON -> Object
const jsonToObj = JSON.parse(objToJson)
console.log(jsonToObj)
console.log(typeof jsonToObj)
```

### new 연산자
사용자 정의 객체 타입을 생성
매개변수
1. constructor: 객체 인스턴스의 타입을 기술(명세)하는 함수
2. arguments: constructor와 함께 호출될 값 목록

new constructor[([arguments])]

```
function Member(name, age, sId) {
  this.name = name
  this.age = age
  this.sId = sId
}

const member3 = new Member('Bella', 21, 20226543)

console.log(member3) 
console.log(member3.name)
```

# Array
순서가 있는 데이터 집합을 저장하는 자료구조
순서가 있는 collection
배열은 객체다: 키와 속성을 담고있는 참조타입의 객체
배열은 인덱스를 키로 가지며 length 프로퍼티를 갖는 특수한 객체

### 배열구조
- 대괄호([])를 이용해 작성
- 배열 요소 자료형: 제약 없음
- length 속성을 사용해 배열에 담긴 요소가 몇개인지 알 수 있음 

### 배열과 메서드
|     메서드     |       역할       |
|----------------|-----------------|
|   push/pop     | 배열 끝 요소를 추가/ 제거|
|unshift/shift |  배열 앞 요소를 추가/제거 |

pop() : 배열 끝 요소를 제거하고, 제거한 요소를 반환
push() : 배열 끝에 요소 추가
shift() : 배열 앞 요소를 제거하고, 제거한 요소를 반환+
unshift(): 배열 앞에 요소를 축

### Array Helper Methods
배서열을 순회하며 특정 로직을 수행하는 메서드
메서드 호출 시 인자로 함수(콜백 함수(를 받는 거))
[mdn array 메소드 확인](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

##### forEach 
  - 인자로 주어진 함수(콜백함수)를 배열 요소 각각에 대해 실행
  - arr.forEach(callback(item[, index[, array]]))
  - item: 처리할 배열의 요소, index: 처리할 배열 요소의 인덱스, array: forEach 호출한 배열
  - 반환값: undefined

##### 콜백함수(Callback function)
- 다른 함수에 인자로 전달되는 함수
- 외부 함수내에서 호출되어 일종의 루틴이나 특정 작업을 진행
- 사용이유
  1. 함수의 재사용성 측면
  2. 비동기적 처리 측면

##### map
- map 배열 내의 모든 요소 각각에 대해 함수(콜백)를 호출하고, 함수 호출 결과를 모아 새로운 배열을 반환
- arr.map(callback(item[, index[, array]]))
- item, index, arr
- 반환값: 배열의 각 요소에 대해 실행한 'callback'의 결과를 모은 새 배열
- 기본적으로 forEach 동작 원리와 같지만 forEach와 달리 새로운 배열을 반환함

