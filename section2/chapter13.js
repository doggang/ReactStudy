let add10 = (num)=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof num === "number"){
                resolve(num+10);
            }else{
                reject("숫자가 아닙니다");
            }
        },2000);
    });
    return promise;
}

add10(30).
    then((result)=>{
        console.log(result);
        return add10(result);
    }).
    then((result)=>{
        console.log(result);
        return add10(undefined);
    }).then((result)=>{
        console.log(result);
        return add10(result);
    }).catch((error)=>{
        console.log(error);
    });