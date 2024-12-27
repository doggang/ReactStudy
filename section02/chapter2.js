function returnTrue(){
    console.log("true 함수");
    return true;
}

function returnFalse(){
    console.log("false 함수");
    return false;
}

console.log(returnTrue() && returnFalse());
console.log("\n");

function printName(person){
    const name = person && person.name;
    console.log(name || "person 값이 없음");
}

printName();
printName({name : "김도현"});

