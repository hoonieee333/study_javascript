// variable hoisting
console.log(number); // undefined

var number;
number = 30;

console.log(number); // 30

// 데이터 타입
// -> number, string, boolean, undifined, null, symbol / object

// 데이터 타입을 구분함으로써 
// 1) 값을 저장할 때 확보해야 할 메모리 공간의 크기를 결정
// 2) 값을 참조할 때 읽어들일 범위를 결정 ex) 숫자는 8바이트므로 8바이트 만큼 읽기
// 3) 메모리의 2진수를 어떻게 읽을지 결정 

// C, 자바와 같이 정적 선언이 아닌 동적으로 선언
// -> 유연하지만 신뢰성은 낮으므로 변수 남발은 지양하고 스코프를 좁게 사용하자 또는 상수를 사용

// 자바스크립트 엔진에서는 암묵적인 타입 변환이 일어난다. 
// 숫자를 기대하는 곳에서는 숫자로, boolean을 기대하는 곳에서는 boolean 으로 변환시킨다.

// 명시적 타입 변환은 String(), Number(), Boolean() 등이 있다.

// 단축 평가 : 논리 연산자 중 논리곱, 논리합은 boolean 이 아닌 데이터 타입을 반환한다.
// 1 && 2; -> 2 / 'hello' || 'world' -> hello'
// 단축 평가는 if else 문이나 여러가지 패턴에 사용 가능하다...

// 옵셔널 체이닝 연산자

// null 병합 연산자

