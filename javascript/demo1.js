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

// 객체는 뮤터블, 변경 가능한 값으로 프로퍼티로 구성
// 프로퍼티는 키와 값으로, 키는 문자열 또는 심벌 값, 값은 모든 값이 올 수 있다.

// 프로퍼티 접근에는 접근 연산자 . 또는 [] 을 사용할 수 있다.
// 대괄호 접근 연산자인 [] 에서 '' 로 감싸지 않으면 식별자로 인식한다.
// 존재하지 않는 프로퍼티 키에 접근할 경우 undefined 를 반환한다.
// 접근 연산자와 키로 동적 할당이 가능하며 delete 연산자로 프로퍼티를 삭제할 수 있다.

// 원시 타입 -> 값 전달 / 객체 타입 -> 참조값 전달

// 함수 정의
// 함수 선언문, 함수 표현식

// 기명 함수 리터럴 단독 사용 시 함수 선언문으로 해석
// () 과 같은 그룹 연산자 내 사용 -> 평가 가능한 리터럴을 기대 -> 함수 표현식으로 해석

function foo() {
  console.log('this is foo');
}
// 위와 같은 함수 선언문은 식별자가 없으므로 접근 불가능. 따라서 암묵적으로 식별자 생성.
// -> var foo = function foo() { ... }; 
// 함수 표현식으로 변환해 함수 객체를 생성하지만, 정확히 동일하게 동작하는 것은 아님.

// 함수의 호이스팅
console.log(add(1, 2)); // -> 3
console.log(sub(2, 1)); // -> sub is not...

function add(argX, argY) {
  return argX + argY;
}

var sub = function (argX, argY) {
  return argX - argY;
}

// -> 함수 선언문의 경우 런타임 전 객체 생성하여 자바스크립트 엔진에서
//    암묵적으로 식별자를 생성하고 나서 함수 객체를 할당한다.

// 함수의 표현식으로 함수를 정의하는 경우 함수 호이스팅이 아닌 변수 호이스팅이 발생한다.
// 즉, sub 라는 식별자가 나타내는 메모리 공간에 undefined 가 암묵적으로 할당되고,
// 런타임 이후 sub 식별자가 다른 메모리 공간을 할당하여 참조 값을 할당한다.
// 따라서, 함수의 표현식으로 함수를 정의할 때에는 정의 후 함수를 참조 또는 호출해야 한다.

// Function 생성자 함수
var plus = new Function('x', 'y' , 'return x + y');
console.log(plus(1, 2));
// 일반적이지는 않음

// 화살표 함수
const mathAdd = (x, y) => x + y;
console.log(mathAdd(1, 2));
// 익명 함수로만 정의한다. 

// 함수 호출
// functionName 함수 호출 연산자 (인수), 인수는 표현식이다.
// 매개변수는 변수와 같이 값에 undefined가 할당되는데, 인수의 갯수가 맞지 않는 경우
// 연산이 이루어지면 return 또한 당연히 undefined 이다.

function abc(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;

  return a + b + c;
}

// 단축 평가를 통해 인수가 전달되지 않아도 매개 변수에 기본값을 할당한다.

function abcAdd(a = 0, b = 0, c = 0) {
  return a + b + c;
}

// 매개변수에 인수를 전달하지 않거나 undefined 를 전달할 경우에 사용한다.

// 반환문 return 키워드는 뒤의 평가식을 평가해 반환, 없으면 undefined 를 반환한다.

// 함수에서 인수를 매개변수에 전달할 때, 
// 원시값을 전달할 경우 원본 값이 변경되지 않지만 (프리미티브는 이뮤터블, 값에 의한 호출)
// 참조값을 전달할 경우 원본 값이 변경된다. (레퍼런스는 뮤터블, 참조의 의한 호출)

// 기명 또는 무명 함수를 그룹 연산자로 감싸면 즉시 실행 함수가 된다.
var res = (function() {
  var a = 1;
  var b = 2;
  return a + b;
}());

// 재귀 함수

function factorial(n) {
  var result = 0;
  if (n == 1) result = 1;
  else result = n * factorial(n - 1);
  return result;
}

var factorial = function foo(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

// 중첩 함수

function outer() {
  var x = 1;

  function inner() {
    var y = 2;
    console.log(x + y);
  }

  inner();
}

// 콜백 함수
// 함수의 매개변수를 통해 다른 함수 자체를 전달할 때, 이 함수는 콜백 함수라고 한다.
// 콜백 함수를 쓰는 이유는 중첩 함수와 달리 로직을 외부에서 함수로 구현하여
// 매개 변수로 전달하기 때문에 유지 보수에서 편하다는 장점이 있다.

function repeat(argNum, argFx) {
  for (var i = 0 ; i < argNum ; i++) {
    argFx(i);
  }
}

var logAll = function(argRepeatNum) {
  console.log(argRepeatNum);
}

var logOdd = function(argRepeatNum) {
  if (argRepeatNum % 2 != 0) console.log(argRepeatNum);
}

function logString(argFx) {
  argFx();
}

var logEnglish = function() {
  console.log('Hello');
}

var logKorean = function() {
  console.log('안녕');
}

function logNumber(argNum, argFx) {
  for (var i = 0 ; i < argNum ; i++) {
    argFx(i);
  }
}

logNumber(5, function(i) {
  console.log(i);
});

// 순수 함수
// 외부 상태에 관계 없이 같은 인수가 전달될 때, 같은 값을 반환하는 함수
// 비순수 함수
// 외부 상태에 관계되어 그에 따라 반환값이 달라지거나 외부 상태를 변경하는 함수

// -> 함수형 프로그래밍을 지향하기 위해서, 외부 상태를 변경하여 상태 변화를 어렵게 하는
//    외부 함수의 사용을 지양한다.













