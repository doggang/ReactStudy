 //1. spread 저장

 // 배열
 let arr = [1,2,3];
 let arr1 = [...arr, 4, 5, 6];
 console.log(arr1);

 //객체
let obj = {
    name : "김도현",
    age : 25
}
let obj1 = {
    ...obj,
    hobby : "sleep"
}
console.log(obj1);

//함수
let funca = (q,w,e)=>{
    console.log(q,w,e);
};

funca(...arr);

//rest 매개변수
let funcb = (...asdf)=>{
    console.log(asdf);
}
funcb(...arr);