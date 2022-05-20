"use script";

const x = 10,
  y = 5;
console.log(x * y);
console.log(x / y);
console.log(x + y);
console.log(x - y);

console.log("hello " + "" + "World");

let incr = 99;
let dincr = 99;

//console.log(++incr); // ++ va -- oldida kelsa yigindiga shu zaxoti 1 qoshilib chiqadi
//console.log(--dincr);

console.log(incr++); // ++ va -- keyin quyilsa bitta shagdan keyin qushilib chiqadi
console.log(dincr--);

console.log(incr);
console.log(dincr);

const m = 15;
n = 7;
console.log(m % n); // % belgisini ishlatilganda bolinmani qoldiq summasini chiqarib beradi

// == va === haqida
console.log(5 + 6 == "11"); //malumot tugriligini tekshiradi
console.log(5 + 6 === "11"); // malumot va data_type turini tekshiradi

// && va || haqida
const ischeked = true,
  isclose = false;

console.log(ischeked && isclose);
// && va degan manoda keladi ikkala malumot ham bir xil yani togri bulishi kere

console.log(ischeked || isclose);
// || esa ikkalasidan bittasi tugri bulsa buldi ikkalasi ham tugri bulishi shart emas

console.log(ischeked && (isclose || !ischeked));
// ! belgisi kelsa "emas" degan manoda keladi yani !true tugri emas degani.
// doimo malumotlar chapdan ungga qarab uqiladi dasturda!
