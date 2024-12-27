// 배열 순회법

let arr = [1,2,3,4];
for(let value of arr){
    console.log(value);
}
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//객체 순회법
let person = {
    name : "김도현",
    age : 25,
    hobby : "sleep"
}
//object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 전환
let keys = Object.keys(person);
//for of는 배열에 사용
for(let value of keys){
    console.log(value, person[value]);
}
//object.values 사용
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 전환
let values = Object.values(person);
for(let value of values){
    console.log(value);
}

//for in : 객체에 사용
for (let key in person){
    const value = person[key];
    console.log(key, value);
}