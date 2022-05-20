"use script";

// Tsikllar 3 xil buladi
// while
// do
// for

let x = 5;

// while tsiklli
/*while (x < 10) {
  console.log(x);
  x++;
}*/

// do Tsikli
do {
  console.log(x);
  x++;
} while (x <= 10);

// for tsikli
// if orqali  break berilganda usha joyida tugatiladi

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

// continue orqali esa usha malumot tashlab ketiladi

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
