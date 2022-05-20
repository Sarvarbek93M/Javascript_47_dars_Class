"use script";

// IF "agarda" degan manoda bu "?" shu orqali ham yozsa buladi
// ELSE IF "yoki" degan manoda
// ELSE "aks xolda " degani numi ":" orqali yozsa buladi

const age = 18;

if (age < 18) {
  console.log("kichkina");
} else if (age == 18) {
  console.log("balogat yoshi");
} else {
  console.log("Kotta bollar!");
}
// qisqa shaklda IF = "?" va else= ":"

const a = 15;
a == 15 ? console.log("true") : console.log("false");

// switch uzgaruvchisi aniq bir malumotga teng bulsagina ishlatiladi
// case orqali tenglashtiriladi va break orqali amaliyot tugatiladi
// default esa "aks xolda " degan manoda keladi va amaliyot tugatish uchun "continue" quyiladi

const num = 20;

switch (num) {
  case 18:
    console.log("true");
    break;
  case 20:
    console.log("ok");
    break;
  default:
    console.log("false");
}
