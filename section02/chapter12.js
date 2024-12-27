// let task = (a,b, callback)=>{
//     setTimeout(()=>{
//         const sum = a+b;
//         callback(sum);
//     },3000)
// }

// task(1,2, (value)=>{
//     console.log(value);
// });

//음식을 주문하는 상황
let orderFood =(callback)=>{
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    },3000)
}

let cooldownFood = (food, callback)=>{
    setTimeout(()=>{
        const coolFood = `식은음식${food}`;
        callback(coolFood);
    },2000)
}

let freezeFood = (food, callback)=>{
    setTimeout(()=>{
        const freezeFood = `냉동시킨 음식 ${food}`;
        callback(freezeFood);
    },3000)
}

orderFood((food)=>{
    console.log(food);
    cooldownFood(food, (value)=>{console.log(value);})
    freezeFood(food, (value)=>{console.log(value);})
})
