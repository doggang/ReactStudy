// 1. Date 객체 생성하는 방법
let date1 = new Date(); //생성자
console.log(date1);

let date2 = new Date("1997,01,01");
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth()+1;
let date = date1.getDate();

let hour = date1.getHours();
let min = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(0);
date1.setDate(30);
date1.setHours(3);
date1.setMinutes(34);
date1.setSeconds(56);
console.log(date1.toDateString());
console.log(date1.toLocaleString());