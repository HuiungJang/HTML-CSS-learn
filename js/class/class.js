'use strict';

// class
// 연관있는 데이터를 모아둔 박스 같은거
// 속성(field)와 함수(method)로 이루어져있고 속성만으로도 구성될 수 있다.
// 클래스에는 데이터가 있지않고 틀만 있고 정의만 되어있다.
// 데이터를 가지고 있는 것은 object

// 객체지향언어
// class -> template
// object -> instance of a class.
// ES6부터 추가됨

// 클래스 선언
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }// 생성자

    speak(){
        console.log(`${this.name}: hello!`);
    }// 메소드
}

// object 생성
const  ellie = new Person ('eille',20);
console.log(ellie.name);
// ellie
console.log(ellie.age);
// 20
ellie.speak();
// ellie : hello!

// getter, setter
// 사용자의 실수로 잘못된 값을 입력받았을 때
// 오류를 방지하기 위해서 사용한다.

class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // User라는 클래스를 만든다.
    // 성, 이름, 나이를 받도록 만든다.

    get age(){
        return this._age;
    }
    set age(value){
        // 나이 값은 음수가 나올수없기때문에
        // if(value<0){
        //     throw Error ('나이는 0보다 작을 수 없습니다!');
        // }// 이런식으로 에러메세지를 발생시키거나

        this._age = value<0 ? 0 : value;
        // 이런식으로 최솟값을 저장하게 할 수 도 있다.
        //this._age = value;
    }
    // 자바스크립트에서
    // getter와 setter을 생성할때
    // 자바처럼 하면 콜스택에러가 발생한다.

    /*
    age를 예로 들때
    constructor에 있는 this.age =age;라는 문장은
    set age에 있는 this.age를 호출하게 되고
    set age에 있는 this.age= value;는 다시 자신의 this.age를 호출하는
    에러에 빠지게된다.
    따라서 getter와 setter를 생성할때는 this._변수명 형식으로 작성해야한다.
    getter는 값을 가져오니 return
    setter는 값을 저장하니  this._
     */

}

const user1 = new User('Steve','jobs',-1);
// 이용자의 실수로 나이가 -1 이 입력된다
// 사람의 나이는 음수가 나올 수 없다!
console.log(user1.age);
// 0


// 필드(fields)
// public,  private
// 가장 최신의 문법이기 때문에
// 아직(2020.04 기준) 브라우저에서 지원되지 않는다. 앞으로 쓰일 것이다.
// 알아만 두자
class ex{
    // 생성자를 쓰지 않고 필드를 정의할 수 있다.
    // 아무것도 없이 사용하면 public
    // #붙여서 사용하면 private

    // public은 클래스 밖에서도 참조가능하지만
    // private는 클래스 내부에서만 참조가 가능하다.

    publicField = 2;
    #privateField = 1;
}
const exex = new ex();
console.log(exex.publicField);
// 2
console.log(exex.privateField);
// undefined

// 스태틱 (Static)
// 가장 최신의 문법에서 추가되었다.
// 아직(2020.04 기준) 브라우저에서 지원되지 않는다. 앞으로 쓰일 것이다.
// 알아만두자

// object는 클래스에 있는 메소드를 가져와서 쓰고 생성하면 object에 속한다.
// 스태틱은 object에 속해있지 않고 class에 속해있다.
// 타입스크립트에서 많이 사용된다.
// object에 상관없이 들어오는 데이터에 상관없이
// 공통적으로 클래스에서 사용한다면 메모리절약에 유용하다!

class Article{
    static publisher = 'HeeUng!!';

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}// static이 포함된 클래스

const article1 = new Article(1);
console.log(article1.publisher);
// undefined
// static은 생성했다고 object에 속한 것이 아니라
// class에 속해있어서 object는 불러올 수 없다.
console.log(article1.printPublisher);
// undefined
// static으로 선언되어있다면 메소드도 마찬가지다.

console.log(Article.publisher);
// HeeUng!!
console.log(Article.printPublisher());
// HeeUng!!



// 상속, 다양성
// 재사용이 가능하기 때문에 유지보수가 용이하고 코드가 간결해진다.

class Shape{
    constructor(width,height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width*this.height;
    }
}

class Rectangle extends Shape{
}
class Triangle extends Shape{
    getArea() {
        return (this.width*this.height/2);
    }

    draw() {
        super.draw();
        console.log('◀︎');
    }
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
// drawing blue color of
// 상속받은 클래스는 상속을 해준 클래스의 메소드를 그대로 사용가능하다.
console.log(rectangle.getArea());
// 400

const triangle = new Triangle(20,20,'red');
console.log(triangle.draw());
console.log(triangle.getArea());
// 삼각형의 넓이는 가로*세로 /2 인데
// Shape에는 가로*세로 밖에 없다
// 그렇기 때문에 필요한 메소드를 재정의해서 사용하는데
// 이것을 Overriding이라고 한다.


// instanceOf
// object가 class로 만들어진 instance인지 확인하는 operator
// 맞으면 true, 틀리면 false 리턴한다.
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T
// js의 모든 object는 Object를 상속받은것
