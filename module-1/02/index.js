let age = 15;
let status = "Fresh Graduate";
let gender = "Men";

if (age > 17) {
  // block of code if
  console.log("Bisa membuat KTP");
  console.log("Masih bisa buat KTP");
} else if (age > 20) {
  //  block of code else if
  console.log("Sudah memiliki KTP");
} else {
  // block of code else
  console.log("Belum bisa membuat KTP");
  if (gender == "Men") {
    console.log("harusnya udah ada KTP");
  }
}

if (age > 20) {
  console.log("Bisa");
}

console.log("if sudah selesai");

if ((age > 21 && status == "Fresh Graduate") || gender == "Men") {
  console.log("Bisa Kerja");
} else {
  console.log("Bisa Kerja");
}

if (age > 14) {
  if (gender == "Men") {
    console.log("Kamu laki2");
  } else if (gender == "Women") {
    console.log("Kamu perempuan");
  } else {
    console.log("Dirahasiakan");
  }
}

let buah = "Mangoes";

switch (buah) {
  case "Oranges":
    console.log("Harga oranges adalah 5rb");
    break;
  case "Mangoes":
    console.log("Harga mangoes adalah 10rb");
    break;
  case "Apple":
  case "Papayas":
    console.log("Harga papayas dan apple adalah 2rb");
    break;
}

if (age > 17) {
  // block of code if
  console.log("Bisa membuat KTP");
} else {
  //  block of code else if
  console.log("Sudah memiliki KTP");
}

console.log(
  age > 14 ? console.log("Belum milik KTP") : console.log("Sudah Memiliki KTP")
);

if (age > 14) console.log("Bisa membuat KTP");

console.log(Boolean(0));
console.log(Boolean("asd"));

let inputUser = " ";

if (inputUser) {
  console.log("Input sudah dimasukkan");
} else {
  console.log("Input belum dimasukkan");
}

console.log(
  inputUser
    ? console.log("Input sudah dimasukkan")
    : console.log("Input belum dimasukkan")
);

let bool = true;
let angka = 2;

if (!(angka === 2)) {
  console.log("masuk");
}

const numberToCheck = 5;
let isEven;

if (numberToCheck % 2 === 0) {
  isEven = `${numberToCheck} is an even number`;
} else {
  isEven = `${numberToCheck} is not an even number`;
}

console.log(isEven);
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
let i = 0;
let bools = true;
while (bools) {
  if (i == 8) {
    break;
  }
  i++;
  if (i == 6) {
    continue;
  }
  console.log(i);
}

i = 0;
do {
  break;
  //   if (i == 6) {
  //     break;
  //   }
  console.log(i);
  i++;
} while (bools);

console.log("next line");

for (let i = 0; i < 10; i++) {
  if (i == 5 || i == 6 || i == 7) {
    continue;
  }
  console.log(i);
}
console.log("next line");

// continue
let angkas = 6.424214;
console.log(angkas.toFixed(3));
// console.log(a.toFixed(6));

let a = 10.234590987788;
const test = Math.floor(a * 1000);
const test1 = test / 1000;
console.log(test1);
