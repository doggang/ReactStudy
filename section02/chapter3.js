// 1. 배열 구조분해할당
let [a,b,c,d] = [1,2,3,4];
console.log(a,b,c,d);

// 2. 객체 구조분해할당
let person = {
    name : "김도현",
    age : 25,
    hobby : "sleep"
};

let {name, age, hobby} = person;

console.log(name, age, hobby);

// 3. 객체 구조분해할당을 이용해 함수 매개변수 받기

function func({name, age, hobby}){
    console.log({name, age, hobby});
}
func(person);