// 1. 문자 결합연산자
console.log('my' + ' home');
// 문자와 문자를 합쳐서 출력
// my home

console.log('1'+2);
// 문자와 숫자를 연산하면 숫자를 문자로 변환해서 합친다.
// 12

console.log(`string literals : 1+2 = ${1+2}`);
// 스트링 템플릿도 사용가능하다.
// string literals : 1+2 = 3


// 2. 숫자 연산자

console.log(1+1);
// 더하기
console.log(1-1);
// 빼기
console.log(1/1);
// 나누기
console.log(1%1);
// 나머지연산
console.log(1*1);
// 곱하기

console.log(2**3);
// 제곱연산  -> 2의 3승


// 3. 증감연산자
// ++, --

// 4. 할당연산자
let x =3;
let y =4;
console.log(x += y); // x = x+y; 7
console.log(x -= y); // x = x-y; -1
console.log(x /= y); // x = x/y; 0.75
console.log(x *= y); // x = x*y; 12


// 5. 비교연산자
// <, <= , >, >=

// 6. 로직연산자
// ||(or) &&(and) !(not)

// 가장 간단한 로직을 먼저 호출하고 가장 복잡한 로직을 뒤에 둔다! < 중요

// or 연산자는 처음 값이 true면 뒤의 값을 보지도 않고 true를 반환하고 끝난다.
// and 연산자는 처음이 false면 뒤의 값을 보지않고 false를 반환하고 끝난다.
// not 연산자는 t -> f , f-> t로 결과를 반전해서 반환한다.

// 7. 동등비교 연산자
// == loose equality
// 타입을 신경쓰지 않고 동등비교함

// === strict equality
// 타입을 신경쓰면서 동등비교한다.
// ex
let stringFive = '5';
let numberFive = 5;

console.log(stringFive == numberFive);
// true -> 타입을 신경쓰지 않고 형태가 같은지 확인한다
console.log(stringFive != numberFive);
// falas -> 타입을 신경쓰지 않기때문에 같은걸로 본다.


console.log(stringFive === numberFive);
// false -> 타입을 신경쓰며 비교한다.
// string과 number은 타입이 다르기 때문에 false
console.log(stringFive !== numberFive);
// true -> 타입을 고려하며 비교하기 떄문에 서로 다른걸로 본다.

// -> 코드를 짤 때는 === <<< 이걸사용하자
// object를 항상 신경쓰면서 해보자
const test1 = {name : 'test'};
const test2 = {name : 'test'};
const test3 = test1;

console.log(test1 == test2);
// 예상 => true
// 레퍼런스(주소)끼리 비교기 때문에
// 서로 다른 주소를 가르키고 있으므로
// false

console.log(test1 === test2);
// 예상 => false
// 레퍼런스를 비교하는 것이지
// 레퍼런스가 가르키고 있는 값을 비교하는 것이 아니다.

console.log(test1 === test3);
// 예상 => true
// 같은 레퍼런스를 가르키고 있기 때문이다.

// 0, null, undefined 는 false를 의미 할 수 있지만 결국 false는 아니다.
console.log( 0 == false);
// t
console.log( 0 === false);
// f
console.log( '' == false);
// t
console.log( '' === false);
// f
console.log( null == undefined);
// t
console.log( null === undefined);
// f

// 8. 조건 연산자(If operator)
// if, else if, else

// 9. 삼항 연산자(Ternary operator)
// 조건 ? 값1 : 값2;
// 간단한 조건만 이렇게 쓰자

// 10. Switch문 (switch operator)
// 타입스크립트에서 타입검사할때 유용하다.
// if 문에서 else if가 계속 반복된다면 고려할만하다.

// 11. 반복문 (Loops)
// while, do while(블럭을 먼저 실행할때 사용), for

// nested loop(중첩 반복문) 가능하다.
// O(n^2) -> 중첩 반복문을 사용하면 CPU에 부하를 주기때문에 되도록이면 자제하자.

// practice
for(let i =0; i<11; i++){
    if(i%2===0){
        console.log(`q1:${i}`);
    }
}

for( let i = 0; i<11; i++){
    if( i%2 !== 0){
        continue;
    }
    console.log(`q1:${i}`);
}

for( let i = 0; i<10; i++){
    console.log(`q2:${i}`);
    if( i === 8){
       break;
    }
}

