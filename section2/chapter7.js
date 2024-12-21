//6가지 조작 메서드
//1. push : 배열의 맨 뒤에 값 추가
let arr1 = [1,2,3];
arr1.push(4);
console.log(arr1);

//2. pop : 배열의 맨 뒤 값 제거 및 반환
let arr2 = [1,2,3];
let arr2pop = arr2.pop();
console.log("pop :", arr2pop);
console.log("arr2 :", arr2);

//3. shift : 배열의 맨 앞에 값 제거 및 반환
let arr3 = [1,2,3];
let arr3shift = arr3.shift();
console.log("shift :", arr3shift);
console.log("arr3 :", arr3);

//4. unshift : 배열의 맨 앞에 값 추가
let arr4 = [1,2,3];
arr4.unshift(0);
console.log(arr4);

//5. slice : (x,y)일때 x index부터 y index전까지 잘라내고 반환
let arr5 = [1,2,3,4,5,6];
let arr5slice = arr5.slice(2,5);
console.log("arr5slice :", arr5slice);
//6. concat : a 배열과 b 배열을 합침
let arr6 = [1,2];
let arr7 = [3,4];
arr6 = arr6.concat(arr7);
console.log(arr6);