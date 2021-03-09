'use strict';

// fetch() -> 익스플로러에서 지원이 안됨
// 브라우저에서 서버와 통신하게 해줌.
// 서버와 데이터를 주고받을 때는 xml 뿐만 아니라 많은 데이터 포멧이 있다.

// 요즘에는 json을 많이 쓴다.
// JavaScriptObjectNotation
// json도 object처럼 key와 value로 이루어져 있다.

/*
json

1.데이터를 교환하는 가장 간단한 포멧이다.
2.텍스트 기반이라 가볍다.
3.읽기 편하다.
4.key value 쌍으로 이루어져있다.
5.데이터를 직렬화하고 전송하는데 쓰인다.
6.프로그램언어와 플랫폼에 독립적이다-> 상관없다.
 */

/*
어떻게 serialize 할지?
어떻게 deserialize 할지?
 */

// Object to JSON
// JSON.stringify(obj);
// JSON.stringify(value[, replacer[, space]])
// js값이나 객체를 JSON문자열로 변환한다.
// replacer를 함수로 전달하면 변환전 값을 변형가능하다
// 배열로 전달하면 지정한 속성만 결과에 포함된다.
// replacer 지정안하거나 null이면 -> 객체의 모든 속성이 JSON 문자열 결과에 포함
// space -> 가독성을 위해 공백(space) 삽입 최대 10 , 지정안하거나 null -> 공백x

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit ={
  name: 'tori',
  color:'white',
  size:null,
  birthDate: new Date(),
  jump:()=>{
    this.name = name;
    console.log(`${name} can jump`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
// 함수는 포함되지 않는다.
// 자바스크립트만 있는 symbol도 포함되지 않는다.
json = JSON.stringify(rabbit,["name","color"]);
// 해당하는 property만 전달가능하다.
console.log(json);

json = JSON.stringify(rabbit,(key,value)=>{
  console.log(`key:${key},value:${value}`);
  //return value;
  // 모든 key, value가 전달됨

  return key === 'name'? 'hee':value;
  // 입력값을 변경하기
});
console.log(json);

console.clear();


// JSON to Object
// JSON.parse(text[, reviver])
// 받은 값을 js 값이나 객체를 생성한다.
// reviver 함수를 받으면 결과 받기전 변형가능
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// rabbit 객체에는 jump 메소드가 포함되어있지만
// JSON으로 전달되며 serialization을 하게되는데
// 이때 메소드는 serialization을 하지 않기 때문에
// 다시 object로 변환했을때는 메소드가 포함되어있지 않다.

//obj.jump();
// 오류 !

console.log(rabbit.birthDate.getDate());

//console.log(obj.birthDate.getDate());
// 오류 !
// rabbit의 birthDate는 Date객체지만
// obj의 birthDate는 string으로 변환됐기 때문에 안된다.

const obj2 = JSON.parse(json, (key,value)=>{
  console.log(`key:${key},value:${value}`);
  // 모든 key와 value 출력

  return key === 'birthDate'? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate());
// 가능!

// 유용한 사이트
// JSON Diff -> 문제를 디버깅 할때 !
// JSON Beautifier -> 포멧이 망가졌을때 !
// JSON Parser -> JSON을 object 형태로 표기 !
// JSON Validator -> JSON이 유효한지 확인 !
