// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join());
}
// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const tmp = fruits.split(',');
  console.log(tmp);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const newAry =array.splice(2);
  // console.log(newAry);
  const result = array.slice(2,5);
  console.log(result);
}
// ------------------------------------------------------------
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
  // for(let i =0; i<students.length; i++) {
  //   if (students[i].score === 90) {
  //     console.log(students[i])
  //   }
  // }
  console.log('filter arr')
  let ar1 = students.filter((student) => student.score === 90);
  console.log(ar1);

}

// Q6. make an array of enrolled students
{
  // let arr =[];
  // for(let i =0; i<students.length; i++){
  //   arr.push(students[i]);
  // }
  // console.log(arr);

  const arr1 = students.filter((student)=> student.enrolled);
  console.log(arr1);

  // console.log(Array.of(students));
  // Array.of(value)
  // 입력된 value를 데이터로 갖는 배열을 만든다.
  // Array(number) 는 number을 길이로 갖는 배열을 만든다.
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let arr =[];
  for(let i =0;i<students.length; i++){
    arr.push(students[i].score);
  }
  console.log(arr)

  const arr1 = students.map((student) => student.score);
  // 초기값을 함수를 거쳐 새로운 값으로 만드는것.
  // map()
  console.log(arr1);

}

// Q8. check if there is a student with the score lower than 50
{
 let ar2 = students.filter((student)=> student.score<=50);
 console.log(ar2);

  const result =students.some( (student)=> student.score <= 50);
  console.log(result)
  // some()
  // 콜백함수 return값이 true인지 false인지 알려주는 API


  // every()
  // 콜백함수 return값이 true인지 false인지 알려주는 API
  // 모든 배열의 데이터가 조건을 만족해야 true
  const result2 = !students.every( (student)=> student.score<=50);
  console.log(result2);
}

// Q9. compute students' average score
{
  let sum =0;
  for(let i =0; i<students.length; i++) {
    sum += students[i].score;
  }
  console.log(sum/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let string ='';
  let arr =[];
  for(let i =0; i<students.length; i++) {
    let sum = students[i].score;
    arr.push(sum);
  }
  console.log(arr);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  let arr =[];
  for(let i =0; i<students.length; i++) {
    let sum = students[i].score;
    arr.push(sum);
  }
  console.log(arr.sort());

  const result = students
    .map((student) => student.score)
    .sort((a,b) => a-b)
    .join();
  console.log(result);
}