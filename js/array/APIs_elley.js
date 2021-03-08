// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // 배열을 string으로 변환하기

  // join
  // 배열을 전달받은 구분자를 사용해서
  // 문자열로 만든다.

  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';

  // 주어진 string을 배열로 만들기

  // split
  // string이나 정규표현식 (RegExp)을 전달 받아서
  // 그거를 기준으로 배열로 리턴
  // 배열의 길이를 지정할 수 있다. 지정하지 않으면 배열 전체가 리턴됨
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  // 원래 배열도 거꾸로 만들고
  // 새로운 배열도 거꾸로 만든다.

}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0,2);
  // 인덱스 0부터 2개 -> 1,2
  console.log(array); // 원래배열에서 인덱스 0,1이 잘린 후 저장된다.
  console.log(result); // result에는 삭제된 0,1이 저장된다.

  // 배열에서 원하는 부분만 받아오고 싶을때
  // slice
  console.log('---slice---');
  const array2 = [1, 2, 3, 4, 5];
  const result2 =array2.slice(2,5);
  console.log(result2);
  console.log(array2);
  // 원하는 부분만 가져오고 원래 배열은 변경하지 않는다.


}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // 배열에서 전달된 함수가 true로 return일 경우 배열의 요소를 리턴한다.
  // 아니면 undefined
  const result = students.find((student) => student.score === 90);

  console.log(result);
}

// Q6. make an array of enrolled students
{
 const arr1 = students.filter((student)=> student.enrolled);
 console.log(arr1);
 // 조건을 통과한 것을 모아서 새롭게 배열을 만든다.
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const arr1 = students.map((student) => student.score);
  // map()
  // 초기값을 함수를 거쳐 새로운 값으로 만드는것.
  console.log(arr1);
}

// Q8. check if there is a student with the score lower than 50
{
 const result =students.some( (student)=> student.score <= 50);
 console.log(result);
  // some()
  // 콜백함수 return값이 true인지 false인지 알려주는 API
  // 하나라도 조건을 만족하면 true

  // every()
  // 콜백함수 return값이 true인지 false인지 알려주는 API
  // 모든 배열의 데이터가 조건을 만족해야 true
 const result2 = !students.every( (student)=> student.score<=50);
 console.log(result2);
}

// Q9. compute students' average score
{
  // reduce()
  // 배열의 있는 모든 값을 누적함
  const result = students
    .reduce((prev,curr)=> prev+curr.score, 0);
  console.log(result/students.length);

  // reduceRight()
  // 배열의 모든 값을 뒤에 값부터 불러와서 누적함
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map( (student) => student.score)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a,b) => a-b)
    .join();
  console.log(result);
}