//-----------  context this xar doim nimagadur nimadur  narsaga ergashib keladi
//----- " use strict" ishlatilmaganda this = window ga

//------- thisni chqarishini 4ta usuli bor

//----1-si ---

// function func() {
//   console.log(this);
// }
// func();
//----this = windowga
"use strict";

// function showThis(a, b) {
//   console.log(this); // undifined
//   function calc() {
//     console.log(this); // undifined
//     return a + b;
//   }
//   console.log(calc());
// }

// showThis(8, 10);
//---------------------
// 2-usul: this = obyektlarda obyektga teng shaklda ishlatiladi

// const obj = {
//   a: 1,
//   b: 1,
//   calc: function () {
//     console.log(`bu  ${this.a + this.b} - usul `);
//   },
// };
// obj.calc();
//------------------------------------
// -------------
//3-usul: context this = kosntruktrda va classda yangi yangi objectga teng buladi
// function Car(name, color) {
//   this.name = name;
//   this.color = color;
//   this.hi = function () {
//     console.log("salom");
//   };
// }
// const bmw = new Car("bmw", "black");
// bmw.hi();
//-----------------------------
//4-usul: context this call va apply, bind orqali bowqa bir uzfaruvchi elementga boglanadi

function hello(surname) {
  console.log(this);
  console.log(this.name + " " + surname);
}
const person = {
  name: "sarvar",
};
hello.call(person, "mehmonov");
hello.apply(person, ["Mehmonov"]);

function calc(num) {
  return this * num;
}

const double = calc.bind(2);
console.log(double(3));
