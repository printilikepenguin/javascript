# OS 지식

동기적 vs 비동기적 / 동시에 일을 처리하는 것은 다른 개념이다
용어로 적으면 아래와 같다
- Synchronous, Asynchrounous, Blocking, Non-Blocking
  - 비슷한 개념이라 혼동할 수 있으니 주의

## 동기적(Synchrounous) vs 비동기적(Asynchrounous) ?
- 순서대로 일이 마치는가? 에 대한 여부
- A -> B -> C 함수가 순서대로 호출되었을 때, 순서대로 끝나는가?
- 즉 실행순서와 끝나는 순서가 동일한가에 대한 구분

## Blocking vs Non-Blocking
- 동시에 작업을 할 수 있는가?
- A -> B 함수를 호출
  - A가 실행되는 도중에 B함수가 아무것도 못하면 Blocking 상태라고 합니당
  - A가 실행되는 도중에 B함수도 자기 일을 동시에 진행한다면 Non-Blocking

ex
```
상사가 부하에게 일을 시키고 밥을 먹으려 함
부하는 일이 끝나면 상사에게 전화

1. 일을 시켜놓고 상사는 밥을 먹는다
  1.1 밥 먹는 중에 부하가 일 끝났다고 전화함
  - 끝나는 순서 동일(Syschronous)
    -> NonBlocking-Synchronous
  1.2 밥먹고 와서 일에 대한 결과 들음
  - 끝나는 순서 바뀜(Asynchronous)
    -> NonBlocking-Asynchronous

2. 일 끝날 때까지 기다렸다가, 결과 듣고 밥먹으러감
  - 밥을 동시에 먹지 못함(Blocking)
  - 동시 처리 불가 -> 끝나는 순서 무조건 보장
    -> Blocking-Synchronous

- Blocking-Asynchronous한 상황은?
  - 실제사례가 있다면 대부분 개발자 실수
  - NonBlocking-Asynchronous 방식쓰는데, 그 과정 중 하나라도 Blocking     요소가 존재한다면 의도치 않게 Blocking-Asynchronous가 발생 가능
```

## 프로세스와 스레드
- 자바스크립트는 Single Thread 기반 언어이다

## 프로세스(Process)
- 실행중에 있는 프로그램
  - 프로그램? : 보조 기억장치에 저장되어 있음
    - 실행되기를 기다리는 명령어와 정적인 데이터의 묶음
  - 더블 클릭 등으로 프로그램을 실행하면
    - 실행을 위해 주기억장치(RAM)에 메모리 할당
    - 이때부터 프로세스라고 부름

## 스레드(Thread)
- 프로세스 내부에서 실제로 작업을 하는 주체
  - 작업의 단위, 흐름이라고도 표현함
  - 프로그램을 작동시키기 위해 필요한 자원들이 존재(메모리, CPU 할당 등)
    - 이러한 자원을 실제로 이용하는 단위
- 즉 하나의 프로세스는 하나 이상의 스레드로 구성

## 멀티프로세스 
- 여러 프로그램을 동시에 실행하는 기법
  - 라이브 + vscode + MM 동시에 실행하는 것처럼
- CPU는 한번에 하나의 연산만 수행 가능
  - 연산이 너무 빨라서 동시에 작업하는 것으로 보이는 것
  
## 멀티 스레드
- 하나의 프로세스 내에서 동시에 여러 스레드로 작업을 실행
  - 유튜브 라이브: 영상 시청 + 채팅 입력 + 채팅 확인
- 스레드끼리는 프로세스 내의 자원을 공유함
  - 동시성 문제
    - 공유된 자원에 동시에 여러 스레드가 접근하는 경우
  
자바는 싱그링