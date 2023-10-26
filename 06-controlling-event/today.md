# event 
무언가 일어났다는 신호, 사건
모든 DOM 요소는 이런 event를 만들어냄

event object
DOM에서 이벤트가 발생했을 때 생성되는 객체
https://developer.mozilla.org/ko/docs/Web/API/Event

DOM 요소는 event를 받고 받은 event를 '처리'할 수 있음

# event handler 이벤트 처리기
이벤트가 발생했을 때 실행되는 함수
사용자의 행동에 어떻게 반응할지를 JavaScript 코드로 표현한 것

## .addEventListner()
- 대표적인 이벤트 핸들러 중 하나
- 특정 이벤트를 DOM 요소가 수신할 때마다 콜백
- 화살표 함수 주의사항
  - 화살표 함수는 자신만의 this를 갖지 않기 때문에 자신을 포함하고 있는 함수의 this를 상속받음

#### EventTarget.addEventListener(type, handler)
- 대상에 특정 Event가 발생하면, 지저한 이벤트를 받아 할 일을 등록한다

- type
  - 수신할 이벤트 이름
  - 문자열로 작성(ex: 'click')
- handler
  - 발생한 이벤트 객체를 수신하는 콜백 함수
  - 콜백 함수는 발생한 Event object를 유일한 매개변수로 받음
  - 아무것도 반환하지 않음

- 버튼을 클릭하면 버튼 요소 출력하기
- 요소에 addEventListener를 부착하게 되면 내부의 this값은 대상 요소를 가리키게 됨 (event 객체의 currentTarget 속성 값과 동일)

## 버블링
- 한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고 이어서 부모 요소의 핸들러가 동작하는 현상
- 가장 최상단의 조상요소(document)를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작

## '.target', '.currentTarget'
이벤트가 정확히 어디서 발생했는지 접근할 수 있는 방법
1. target
  - 이벤트가 발생한 가장 안쪽의 요소(target)를 참조하는 속성
  - 실제 이벤트가 시작된 target 요소
  - 버블링이 진행되어도 변하지 않음
2. currentTarget
  - '현재' 요소
  - 항상 이벤트 핸들러가 연결된 요소만을 참조하는 속성
  - 'this'와 같음
  - console.log()로 event 객체를 출력할 경우 currentTarget 키의 값은 null을 가짐
  - currentTarget 이후의 속성값들은 'target'을 참고해서 사용하기

# event handler로 할 수 있는 것들
1. 버튼을 클릭하면 숫자를 1씩 증가해서 출력하기
2. 사용자 입력값을 실시간으로 출력하기
3. 사용자 입력값 실시간 출력과 CSS 수타일 변경하기
4. todo 프로그램 구현
5. 로또 번호 생성기 구현

# 이벤트 기본 동작 취소

## .preventDefault()
해당 이벤트에 대한 기본 동작을 실행하지 않도록 지정
1. copy 이벤트 동작 취소
2. form 제출 시 새로고침 동작 취소

https://underscorejs.org/