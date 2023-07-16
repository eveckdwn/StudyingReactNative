//  var hello =  'world';       //  Global variable
//  var hello = 'korea';        //  같은 변수를 사용했는데도 var는 오류가 나지 않는다. → 바람직하지 않은 결과

// let hello = 'world';     //  let은 변수를 선언한 블록에서 유효함.
// let hello = 'korea';        //  let은 오류를 발생시킴.
//
// if(true) {
//     var hello = 'korea';        //  Local variable
//     let hello = 'korea';     //  Local variable
//     console.log(hello);
// }
//
// test();
//
// console.log(hello);

// const num = 5;  //  const는 상수로 한번 정의하면 재정의할 수 없다.
// num = 6;
// console.log(num);


//  주의: const는 객체나 배열의 요소 수정은 가능하다.
//  object
// const drinks = {};
// drinks.caffe = 'latte';
// drinks.lemon = 'ade';
// console.log(drinks);

//  array
// const arr = [ 1, 2, 3, 4, 5 ];  //  const로 선언한 배열이어도 값이 변환된다.
// arr[0] = 100;
// arr[4] = 500;
// console.log(arr);

//  String Literal
//  ES6 이전 String 처리
// const val01 = 'Hello';
// const val02 = 'World';
// const val03 = val01 + ' ' + val02 + '!!!!';
// console.log(val03);

//  ES6 이후 String 처리
//  `${variable}`
// const litVal = `${val01} ${val02}!!!`
// console.log(litVal);

//  for ... of..
//  for ... in.. 반복문의 경우, 객체의 key값에는 접근이 가능하지만, value 값에 접근하는 방법은 존재하지 않는다.
// let array = [10, 20, 30, 40];
// for(let val in array) {
//     console.log(val);
//     console.log(array[val]);
// }

//  for ... of..는 value 값에 접근이 가능하다.
// for(let val of array) {
//     console.log(val);
// }

/*  단, Symbol iterator 속성을 가진 Collection을 상대로만 사용이 가능value값이 생기면,
    key값이 자동으로 생기는 배열 같은 객체만 사용이 가능하다.
    따라서 iterator 객체를 반환하지 않는 객체를 만들었다면, for-of 반복문은 사용이 불가능하다.
    이런 경우에는 for ... in..을 사용해야한다.
 */
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for(let val of obj) {
//     console.log(val);
// }

// for(let val in obj) {
//     console.log(val);
// }

//  Rest Operator
//  함수의 마지막 파라미티 앞에 ...을 붙여서 함수에 전달된 나머지 인자를 배열로 대체해주는 Rest Operator
// function f (a,b, ... c){
//     //
// }

// function printNums(num1, num2){
//     console.log(num1, num2);
// }
//
// printNums(1,2,3,4,5);     // return 1 2

// function printNums(num1, num2){
//     console.log(arguments);
// }
//
// printNums(1,2,3,4,5);     // return { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5}

// function printNums(num1, ...num2){
//     console.log(num1, num2);
// }
//
// printNums(1,2,3,4,5);     // return 1, [ 2, 3, 4, 5 ]

//  Spread Operator
//  함수를 호출할 때 인수로 사용할 수 있고, 배열 안에 사용될 수 있고, 객체 안에서 사용될 수 있다.
// 배열의 각 항목을 함수의 파라미터로 사용할 수 있다.
// function sum (x, y, z){
//     return x+y+z;
// }
//
// console.log(sum(1,2,3));              // return 6
//
// let arr = [10,20,30];
// console.log(sum(arr));                         // return 10,20,30undefinedundefined
// console.log(sum.apply(null,arr));       // return 60
// console.log(sum(...arr));                      // return 60

// 배열의 항목들을 함수의 여러 항목 중 일부로 사용할 수 있다.
// function sum (a, b, c, d, e){
//     return a+b+c+d+e;
// }
//
// let arr = [20,30];
//
// // return 150
// console.log(
//     sum(10, ...arr, 40, 50)
// );

// face 배열에 있는 항목들을 head가 가질 수 있도록 도와준다.
// let face = ['eyes', 'nose', 'mouth'];
// let head = ['hair', ...face, 'ears'];
// console.log(head);     // return [ 'hair', 'eyes', 'nose', 'mouth', 'ears' ]

// 배열을 복사할 때도 사용
// let arr = [1,2,3];
// let arrCpy = [...arr];
// console.log(arrCpy);   // return [ 1, 2, 3 ]

// 다음과 같이 사용할 수 있지만, 오리지날 배열이 복사된 배열의 수정에 의해 영향을 받을 수 있다.
// let arr = [1,2,3];
// let arrCpy = arr;
// console.log(arrCpy);   // return [ 1, 2, 3 ]
//
// arrCpy.push(4);
// console.log(arrCpy);   // return [ 1, 2, 3, 4 ]
// console.log(arr);   // return [ 1, 2, 3, 4 ]

// 그러나 spread operator를 사용하여 복사를 하면 오리지날 배열에 영향을 주지 않는다.
// let arr = [1,2,3];
// let arrCpy = [...arr];
// arrCpy.push(4);
// console.log(arr);   // return [ 1, 2, 3 ]
// console.log(arrCpy);   // return [ 1, 2, 3, 4]

// 객체에서의 spread operator 사용
let drinks = {
    caffe: 'latte',
    coca: 'cola'
}

// let newDrinks = {
//     lemon: 'tea',
//     orange: 'juice',
//     drinks
// }
//
// console.log(newDrinks);
/*
   return
   { lemon: 'tea',
     orange: 'juice',
     drinks: { caffe: 'latte', coca: 'cola' } }
*/

// let newDrinks = {
//     lemon: 'tea',
//     orange: 'juice',
//     ...drinks
// }
//
// console.log(newDrinks);
// return { lemon: 'tea', orange: 'juice', caffe: 'latte', coca: 'cola' }'

//  Arrow Function
//  표현식의 결과값을 반환하는 표현식 본문
// let arr = [1, 2, 3, 4, 5];
// let twice = arr.map(v=>v*2);
// let twice = arr.map(function(val){
//     return val*2;
// });
// console.log(twice); // return [ 2, 4, 6, 8, 10 ]
/*
    참고: map( a => b )
	1) for문과 같은 반복문;
	2) Javascript에서 지원하는 배열 객체 내장함수
	3) input: 파라미터로 전달되는 함수 / output: 새로운 배열4)
	아래를 arrow function을 활용하면 위와 같이 간단하게 표현하여 사용할 수 있다.
*/

//  상태 블럭 본문(→ 상태를 결정지음)에 사용
// let arr = [1, 2, 3, 4, 5];
// let twice = arr.map(v=> {
//     if( v%2 === 0){
//         console.log('even number');
//     }else{
//         console.log('odd number');
//     }
// });
// console.log(twice);
/*
	return
    odd number
    even number
    odd number
    even number
    odd number
    [ undefined, undefined, undefined, undefined, undefined ]
*/

// let arr = [10, 20, 30, 40, 50];
// let twice = arr.map((v, i) => {
//     //  map의 2번째 인자값은 index
//     console.log(`i: ${i}, v: ${v}`);
// });
/*
    return
	i: 0, v: 10
	i: 1, v: 20
	i: 2, v: 30
	i: 3, v: 40
	i: 4, v: 50
*/

//  Class
class Person {
    // constructor는 class instance를 생성하고 생성한 instance를 초기화
    // instance: class를 구성하기 위한 껍데기
    constructor(region_, gender_) {
        this.region = region_;
        this.gender = gender_;
    }

    greetings(val = 'an-nyeong') {
        console.log(val);
    }
}

let korean = new Person('Korea', 'male');
console.log(korean);   // return Person { resion: 'Korea', gender: 'male' }
korean.gender = 'female';
console.log(korean);   // return Person { resion: 'Korea', gender: 'female' }

korean.greetings();    // return an-nyeong

// 상속
class American extends Person {
    constructor(region_, gender_, language_) {
        super(region_, gender_);
        this.language = language_;
    }

    greetings(val = 'hello') {
        console.log(val);
    }
}

let american = new American('USA', 'female', 'English');
console.log(american);   // return American { resion: 'USA', gender: 'female', language: 'English' }

american.greetings();    // return hello
