'use strict';
console.log('Hello world');

// 변수
// 변경가능한 값이라고 한다.
// 자바스크립트에서는 let 을 사용한다(ES6 부터 추가됨)

// 글로벌 스코프 (global scope)
// 중괄호로 묶여있지않는 부분에 선언된 것들
// 어디서든 호출이 가능하고 사용이 가능하다.
let globalName = 'global name';
console.log(globalName);
//globalName

// 블럭스코프 (block scope)
{
    // 블럭스코프 내부에서 선언된 변수는
    // 블럭 밖에서 호출이 되지 않는다.
    let name = 'block name';
    console.log(name);
    // block name
    console.log(globalName);
    //globalName
}

console.log(globalName);
// globalName
console.log(name);
// 아무 값도 나오지 않는다. 언
// 왜? 블럭스코프안에 'name' 선언되어있으니까

// 글로벌 변수는 어플리케이션의 실행부터 종료까지
// 항상 메모리에 탑재되어있기때문에
// 꼭 필요할 때만 사용하자.

// var << 이제 사용하지 않는다. 대신 let을 사용하자
// mutable
// 다만, 호환성을 생각해야한다. 인터넷익스플로러에서만 지원안된다.
// Babel을 사용하면 호환이 되기는하지만 무시하자.

// 선언도 하기 전에 할당이 가능하다 심지어 출력도 된다.
// 심지어 블럭스코프를 무시한다.
// var hoisting
// hoisting
//  -> 어디에 선언했는지 상관없이 제일 위로 끌어올려주는 것을 말한다.


// const
// 한번 선언하면 수정이 불가능하다.
// immutable
// 장점
// 1. 보안성
// 2. 스레드 안전성
// 3. 사람이하는 실수 줄여줌
// 앞으로 변수의 내용을 수정할 일이 없다면  const를 사용하자

// 데이터 타입
// primitive -> number, string, boolean, null, undefined, symbol
// object -> 여러 변수들을 묶어서 하나로 관
// function
// 함수도 변수에 할당이 가능하다. 함수의 파라미터로 전달가능하고 리턴도 가능

// number
// 숫자는 정수든 실수든 상관없이 -> number
// Infinity
// -Infinity
// NaN(not a number) -> 숫자가 아닌 값을 연산해버렸을 때 나타남.
// -> 변수를 잘 살피자.

// string
// 글자가 한개든 여러개든 string으로 가능!
// template literals
// `문자(열) ${변수명}` (따옴표 아님 ` 백틱임 물결표시 있는 키)
// 변수명에 할당된 값과 문자(열)이 합쳐져서 반환된다.
// ex
const ho = 'world';
const hi = `hello ${ho} !`;
console.log(hi);
// hello world

// null
let nothing = null;
// 값이 아무것도 없는 빈 값

// undefined
let x;
// 아직 정의가 안됨

// symbol
// 고유한 식별자가 필요하거나
// 동시에 일어나는 경우에 식별할 필요가 있을 때 필요
// ex
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2);
// false 고유한 식별자이기 때문에 같지 않다.
// 바로 출력이 안됨
// 출력하려면 .description을 붙여서 출력해야함.
console.log(symbol1.description);
// id 출력


// 다이나믹 타이핑( Dynamic typing )
// 선언시 데이터 타입을 선언하지않고
// 런타임시 타입이 설정됨
// ex
let text = 'hello';
console.log(text.charAt(0));
// h

console.log(`value: ${text}`,`type: ${typeof text}`);
// hello, type : string

text =1;
console.log(`value: ${text}`,`type: ${typeof text}`);
// 1 , type : number

text = '7'+5;
console.log(`value: ${text}`,`type: ${typeof text}`);
// 75 type : string

text = '8'/'2';
console.log(`value: ${text}`,`type: ${typeof text}`);
// 4, type : number

console.log(text.charAt(0));
// 에러! 발생 타입이 number로 바뀌어 버렸고
// number은 charAt로 인덱스를 가져올 수 없다!


// object
// 데이터 구조체
const ex = { name : 'hee', age: 25};
// name과 age라는 구조는 못 바꾼다.
// 하지만 name하고 age에 할당된 값은 변경 가능하다.
ex.name ='ung';
ex.age = 25;
