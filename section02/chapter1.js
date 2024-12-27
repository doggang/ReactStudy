// 1.Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2.Falsy 활용


function con(student){
    if(!student){
        console.log("없습니다");
    }else{
        console.log(student.name);    
    }
}

let student ={};

con(student);