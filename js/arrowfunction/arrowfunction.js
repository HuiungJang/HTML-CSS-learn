'use strict';
// Function 함수
// 서브프로그램이라고도 불린다.

// 선언하는 방법
// function name(parm1, param2 ...){body... retrun;}
// 한가지 함수에는 한가지 기능만 넣는다.
// 함수의 이름은 동사형으로 어떤것을 하는 것 이런식으로 짓는다
// 예시) createCard, createPoint...
// function 은 object 다.
// 따라서 변수에 할당할수도 있고
// 매개변수로 사용이 가능하다.

// 함수 만들기
function printHi(){
    console.log('Hi');
}
printHi();
// Hi

function log(message){
    console.log(message);
}
log('Hello@');
log(124);

// 매개변수 ( Parameters )
// 기본형 -> 값 그대로 전달
// object -> 주소값이 전달

function changeName(obj){
    obj.name = 'coder';
}// 입력값이 들어오면 coder로 변경함
const name = {name : 'hee'};
changeName(name);
//  hee -> coder
console.log(name);

// Default parameters
// 매개변수가 입력되지 않았을때
// 기본값으로 대체되어서 리턴
// ES6부터 추가됨

// ES6 이전 매개변수 값이 전달되지 않았을 때는
// 이렇게 예외처리를 해야했다.
function showMessage(message,from){
    if( from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi');
// Hi by unknown

// ES6 이후
function showMessage1(message,from ='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage1('Hi');
// Hi by unknown

// Rest parameters
// 배열 형태로 매개변수를 전달함.
// ES6부터 추가됨

function printAll(...args){
    // ...배열명 하면 전달받은 값을 배열로 받을 수 있음.
    for(let i =0; i<args.length; i++){
        console.log(args[i]);
    }// 반복문으로 배열로 저장된 값을 출력함

    for(const arg of args){
        console.log(arg);
        // Java의 ForEach문과 똑같음
    }// for of 문으로 더 간단하게 출력

    args.forEach((arg)=> console.log(arg));
    // forEach문과 람다식으로 더더 간단하게 출력.
}

printAll('dream','come','true');


// 지역스코프
// 밖에서는 안을 볼 수 없고 안에서는 밖을 볼 수 있다.


// return 값
// 모든 함수에는 return 값이 있으며
// 따로 return값을 지정하지 않았을 경우
// return undefined; 가 자동으로 설정되나 생략한다.


// Early return, Early exit

// 만약 user의 point가 10보다 큰 경우만
// 어떤 로직을 실행해야한다면
// 이렇게 코드를 짤 수 있다.

// 나쁜 코드예
// 10 보다 큰 경우 로직이 실행되게하기
function upgradeUser(user){
    if(user.point>10){

    }
}
// -> 이렇게 되면 if, else if 처럼 조건을 쭉 써야하기떄문에
// 가독성이 좋지 않다.

// 좋은 코드예
// 10보다 작거나 같은 경우는 함수를 종료시켜버리고
// 조건을 만족하면 코드가 실행되게하기.

function upgradeUser1(user){
    if(user.point<=10){
        return;
    }
}
// 이렇게 작성할 경우 들여쓰기가 적어지면서
// 가독성이 좋아진다.
// 다만 조건을 잘생각해서 배치를 해야한다.



// function expression
const print = function (){
    // 함수에 이름이 없는 것을 익명함수 anonymous function이라고 한다.
    // 함수에 이름이 있다면 named function이라고 한다.

    console.log('print');
};
print();
// print
// 함수를 변수에 할당할 수 있다.

const printAgain = print;
printAgain();
// print
// 함수를 변수에 할당하고
// 그 변수명을 함수호춣하는 것처럼 사용하면
// 함수가 호출 된다.

// 일반적인 함수 선언과 다른점
// 일반적인 함수선언은 hoisting이 가능하다.
// 즉, 함수를 정의하기 전에 함수 호출이 가능하다 (var와 같다)



// Callback
// 콜백 함수
function randomQuiz(answer, printYes, printNo){
    // 답이 true, false 일때 전달된 함수를 부르는 것을 콜백함수라고 한다.
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function(){ // anonymous function
    console.log('Yes');
};
const printNo = function print(){
    // named function
    // function express에서 named function을 사용하는 이유는
    // 디버깅 과정에서 실행되는 함수의 이름을 확인하기 위해서다.
    console.log('No');
    // print(); 함수안에서 자신 스스로 호출하는 것을 recursion(재귀)라고 한다.
    // 피보나치 수열이나 반복된 평균값을 사용할때 사용하고
    // 나머지 경웨서는 프로그램이 죽어버리니 사용하지 않는다.
    // 무한대로 호출하면 callstack이 꽉차서 오류를 발생시킨다.
};

randomQuiz('love you',printYes,printNo);
randomQuiz('BBi~',printYes,printNo);
// printYes, printNo가 함수 이름은 아니다. 할당된 변수의 이름이지.


// ArrowFunction
// 항상 익명함수(anonymous function)

// ex
// ArrowFunction을 사용하지 않은 함수
const simplePrint1 = function(){
    console.log('simplePrint!');
};

// ArrowFunction을 사용해보자
const simplePrint2 = () => console.log('simplePrint!');

// 매개변수를 사용한 화살표함수
const add = (a,b) => a+b;

// 화살표 함수에서 추가적인 로직을 넣고 싶다면
const simpleAdd = (a,b) => {
    // 추가적인 로직
    return a+b+a+b;
    // return값은 필수!
};


// IIFE : Immediately Invoked Function Expression
// 함수를 선언하자마자 호출하는 방법
function hello(){
    console.log('IIFE');
};
// 예를 들어 이런 함수를 선언하자마자 호출하고 싶다면
(function hello(){
    console.log('IIFE');
})();
// 이렇게 앞뒤를 괄호로 묶고 함수처럼 ()를 붙여주면 된다!


// function calculate(입력값, a,b)
// 입력값을 받아서 계산을 해보자!

