// // 5가지 요소 순회 및 탑색 메서드
// // 1. forEach 
// // 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// let arr1 = [1,2,3];

// arr1.forEach(function(item, index, arr){
//     console.log(index, item*2);
// })

// let doubledArr = [];

// arr1.forEach(function(item){
//     doubledArr.push(item*2);
// })

// // 2. includes
// // 배열에 특정 요소가 있는지 확인하는 메서드
// let arr2 = [1,2,3];
// console.log(arr2.includes(3));

// 3. indexOf
// 배열에 특정 요소가 어느 인덱스에 있는지 찾아서 반환해주는 메서드
let arr3 = [1,2,3]
console.log(arr3.indexOf(2));