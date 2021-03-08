'use strict';

// Array
// 타입이 달라도 배열에 전부 넣을 수 있다.
// 하지만 그렇게 하면 효율적이지 않다. -> 가능한 이렇게 쓰지 않는다.

// 1. 배열의 선언
// 첫번째 방법
const arr1 = new Array();
// 두번째 방법
const arr2 =[1,2];

// 배열은 인덱스 기준으로 !
// 2. 인덱스를 통해 배열에 접근하기
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
// 마지막 인덱스 값을 가져오기

console.clear();
// 3. 반복문을 사용해서 모두 출력하기

// a. 첫번째 방법
// 단순 loop
for(let i=0; i<fruits.length; i++){
  console.log('loop array : ' + fruits[i]);
}
// b. 두번째 방법
// for of
for(let ar of fruits){
  console.log('for of array  :' + ar);
}

// c. 세번째 방법
// forEach
// 배열에 저장된 값마다 우리가 전달한 콜백함수를 실행한다.
// forEach(callbackfn: (value: T, index: I
fruits.forEach(function (fruit,index){
  console.log(fruit,index);
});

fruits.forEach((fruit) => console.log(fruit));


// 4. 배열에 데이터를 추가, 삭제, 복사하기
// push : 제일 뒤에 데이터 추가하기
fruits.push('🍓','🍑');
console.log(fruits);
// pop : 제일 뒤에있는 데이터 제거하기
fruits.pop();
console.log(fruits);

// unshift : 앞에서 부터 추가하기
fruits.unshift('🍋');
console.log(fruits);

// shift :앞에서 부터 삭제하기
fruits.shift();
console.log(fruits);

// shift 와 unshift는 pop,push보다 매우 느리다. < 중요
// pop,push는 기존 데이터를 움직이지 않아서 빠르다.
// shift와 unshift는 배열에 있는 데이터를 전부 움직여야해서 느리다.
// 가능한 pop, push를 사용하자

// 지정된 위치의 값을 삭제하기
// splice
fruits.push('🍋','🍑');
console.log(fruits);

fruits.splice(1,1);
// 원하는 인덱스를 지정하고 몇개를 지울지 정하지 않으면 시작 인덱스 말고 다 지움
// 배열에 있는 값을 지우고 필요하다면 값이 있는 자리에 데이터를 추가한다.
fruits.splice(1,0,'🍏','🍉');
// 값을 지우지 않고 데이터를 추가하기

// 시작 인덱스를 정하고  몇개를 지울껀지 정한다.
console.log(fruits);

fruits.splice(1,1,'🍏','🍉');
// 지우고 나서 원하는 데이터 넣기
console.log(fruits);

// 두개 이상의 배열 합치기
// concat
// 첫번째 배열 끝에 배열을 합친다.
// 기존의 배열을 변경하지 않고 새로운 배열을 반환한다.
const fruits2 = ['2','3'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
// Searching
// 검사, 인덱스를 찾기

// indexOf
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
// 배열에 해당하는 값이 몇번 인덱스에 있는지 리턴함
// 중복값이 있다면 첫번째 값만 리턴
// -1 나오면 그 값이 없는 것이다.

// includes
console.log(fruits.includes('🍓'));
// 해당하는 값이 배열에 있다면 true, 없으면 false

// lastIndexOf
console.clear();
console.log(fruits);
fruits.push('🍎');
// 배열 제일 끝에 추가함
console.log(fruits);
console.log(fruits.indexOf('🍎'));
// 0
// 배열 왼쪽부터 찾아서 인덱스를 리턴
console.log(fruits.lastIndexOf('🍎'));
// 5
// 배열 오른쪽 끝부터 찾아서 인덱스를 리턴
console.clear();


