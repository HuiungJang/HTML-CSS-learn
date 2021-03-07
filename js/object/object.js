'use strict';

// Object 오브젝트
// 자바스크립트의 데이터 타입중 하나
// 관련 데이터 및 기능의 모음
// JS의 거의 모든 objects는 Object의 객체이다.


// 1. literal , object
const name = 'hee';
const  age = 20;
print(name,age);
function print(name, age){
  console.log(name);
  console.log(age);
}
// 이렇게 함수를 만들어 놓으면
// name과 age외에 다른 정보를 입력해서 출력하고 싶을때
// 할일이 늘어나고 번거로워진다.
// 그래서 오브젝트틀 생성해서 데이터를 관리한다.

// object를 생성하는 두가지 방법
const obj1 ={};
// object literal 문법
// js에서는 class가 없어도 object를 생성할 수 있다.
const obj2 = new Object();
// object constructor 문법

function print2(person){
  console.log(person.name);
  console.log(person.age);
}
const hee = {name : 'hee', age :21};
print2(hee);

// 자바스크립트는 다이나믹 타이핑이 가능하기때문에
// 앞에서 오브젝트를 생성할떄 없던 값도 추가가 가능하다.
hee.hasJob = true;
console.log(hee.hasJob);

// 삭제도 가능하다.
delete  hee.hasJob;

// 이렇게 추가와 삭제가 가능하지만
// 나중에 어떤 오류가 발생할지 모르기 때문에 사용을 자제하자.

// object는 key와 value의 집합체이다.
// object = {key :value};

// 2. computed properties
// key는 항상 string 타입으로해야한다.
// 정확하게 어떤 key가 필요할지 모를때 사용한다.
// 동적으로 key에 관한 값을 받아올때 사용한다.

console.log(hee.name);
// 코딩할떄는 .(dot)을 사용해서 하자
console.log(hee['name']);
hee['hasJob'] = true;
// 이렇게 추가도 가능하다.

function printValue(obj, key){
  console.log(obj[key]);
}

printValue(hee, 'name');
printValue(hee, 'age');


// 3. property value shorthand
const person1 = {name : 'bob', age: 2 };
const person2 = {name : 'job', age: 3 };
const person3 = {name : 'dave', age: 4 };
// object 3개를 생성했고 하나더 하고 싶다면
// 하나 더 const person4 = {name : , age:}를 사용해서 만들어야할까?
const person4 = makePerson('hee',4);

function makePerson(name, age){
  return {
    //name : name,
    name,
    // age : age,
    age,
    // key와 value의 이름이 동일하다면 생략이 가능하다.
    // -> property value shorthand
  };
  // 이렇게 함수를 만들어서 입력값을 받으면 바로 object를 생성하게 할 수 있다.
}
console.log(person4)

// 4. constructor function
// 순수하게 object를 만들때는
// function을 class처럼 만들어서 사용할 수 있다.

function Person(name,age){
  this.name = name;
  this.age = age;
}

const person5 = new Person('ung', 20);

// 5. in operator
// 해당 오브젝트안에 key가 있는지 없는지 확인한다.
console.log('name' in hee); // T
console.log('age' in hee); // T
console.log('job' in hee); // F
console.log(hee.job); // 정의하지 않은 key에 접근하면 undefined

// 6. for..in vs for..of
// for(key in obj)
// for ... in
console.clear();
for( let key in hee){
  console.log(key);
  // hee에 있는 key값이 반복문을 돌면서 let key라는 지역변수에 저장됨.
  // 모든 key를 받아와서 처리함
}

// for( value of iterable)
// for ..of
// 배열값을 value에 순차적으로 저장하는것
// 배열을 출력하거나 계산 할 수 있다.
const array = [1,2,3,4,5];
for (let value of array){
  console.log(value);
}

// 7. cloning
// object 복사하기
const user = {name : 'jhw', age :20};
const user2 = user;
user2.name ='coder';
console.log(user);
// jhw -> coder로 변경됨
// user2가 가르키고 있는 메모리주소와
// user가 가르키고 있는 메모리 주소가 같기때문에
// user2에서 수정하면 user에 있는 값이 같이 수정된다( 동일한 메모리 주소를 가르키고있기때문)

// 옛날방법
console.clear();
const user3={};
for (let key in user){
  user3[key] = user[key];
}
console.log(user3);

// Object.assign 사용하기
// 원하는 target에 복사할 source를 추가하면 복사됨.
// source는 여러개도 가능하고 배열도 가능하다.
// 반환되는 값은 target이다.
// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);
const user4 = Object.assign({},user);
console.log(user4);

// 예제
const fruit1 ={color : 'blue'};
const fruit2 = {color : 'red', size : 'big'};
const mixed = Objcet.assign({},fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);
// red ,big
// 동일한 값이 있다면 뒤에 있는 값이 앞에 있는 값을 덮어씌움
// -> 즉 겹치면 뒤에 있는 값만 남는다.

