//quiz 1
const x = 15;
const y = 20;
let max;
if(x>y){
    max = x;
}else if(x<y){
    max = y;
}
console.log(max);

//quiz 2
const a = true;
if(typeof(a) == "boolean"){
    console.log("불리언");
}else if(typeof(a) == "number"){
    console.log("숫자");
}else if(typeof(a) == "string"){
    console.log("문자열");
}else if(typeof(a) == "undefined"){
    console.log("언디파인");
}else if(typeof(a) == "object"){
    console.log("오브젝트");    
}

//quiz 3
let temperature = 10;
if(temperature<0){
    console.log("매우 추움");
}else if(temperature>=0 && temperature<10){
    console.log("추움.");
}else if(temperature>=10 && temperature<20){
    console.log("적당");
}else{
    console.log("더움");
}
