// Array

// adidas, nike, puma
let sepatu1 = "adidas";
let sepatu2 = "nike";
let sepatu3 = "sneakers";

// Array declaration
let listSepatu = ["adidas", "nike", "puma"];
let listArr = new Array("adidas", "nike", "puma");
console.log(listSepatu);
console.log(listArr);

console.log(listSepatu[2]);
console.log(listSepatu.length);

sepatu1 = "NB";
console.log(sepatu1);

listSepatu[0] = "NB";
listSepatu[3] = "Adidas";
listSepatu.push("Crocs");

for (let i = 0; i < listSepatu.length; i++) {
  console.log(listSepatu[i]);
}

let listAngka = [1, 2, 3];

let listPeople = [
  {
    name: "budi",
    age: 22,
  },
  {
    name: "dodi",
    age: 21,
  },
];

console.log(listPeople);

// Array build in method

console.log(listAngka.pop());
console.log(listSepatu.pop());
console.log(listSepatu);
listSepatu.push("Crocs");
console.log(listSepatu);

console.log(listSepatu.shift());
console.log(listSepatu);
console.log(listSepatu.unshift("NB"));
console.log(listSepatu);
console.log(listSepatu.splice(1, 0, "data"));
console.log(listSepatu);

console.log(listSepatu.reverse());

let newListSepatu = listSepatu.filter((value) => value != "nike");
let newListSepatu1 = listSepatu.filter((value) => {
  return value != "nike";
});

console.log(newListSepatu);
console.log(newListSepatu1);

// For Of Loop
let sepatu;
// let i = 4;
for (let sepatu of listSepatu) {
  // console.log(listSepatu[i]);
  console.log(sepatu);
  // i--;
}

// Function

function loopingSepatu(listData, angka) {
  console.log(angka);
  console.log(listData);
  for (let data of listData) {
    console.log(data);
  }
  let i = 0;
}
console.log(newListSepatu);
console.log(loopingSepatu(newListSepatu, 5));

// function declaration bisa dipanggil sebelum dideclare/dibuat
console.log(pertambahan(2, 5));

function pertambahan(angka1, angka2) {
  console.log(angka1 + angka2);
  return angka1 + angka2;
}
console.log(pertambahan(2, 2));

function looping(listData) {
  let temp;
  for (let i = 0; i < listData.length; i++) {
    console.log(i);
    if (listData[i] == 3) {
      return listData[i];
    }
  }

  return temp;
  let a = "b";
}

console.log(looping([1, 2, , 4]));

// function pertambahan(angka1, angka2) {
//   console.log(angka1(4, 2));
//   return angka1(4, 2) + angka2;
// }

// function pengurangan(a, b) {
//   return a - b;
// }
// let jumlah = pertambahan(pengurangan, 4);
// console.log(jumlah);
// console.log(pertambahan(2, 4));
// console.log(pertambahan(1, 1));

// function expression

// function expression tidak bisa dipanggil sebelum dideclare/dibuat
// console.log(pengurangan(3, 2));

// global variable
let defaultAngka;
const pengurangan = function (a = 2, b = 1) {
  // local variable
  let functionAngka = 3;

  console.log(a);
  console.log(functionAngka);

  // variable yg dideclare diglobal scope dapat dipanggil didalam sebuah function
  console.log((defaultAngka = 3));

  return a - b;
};

// variable yg dideclare didalam sebuah function tidak dapat
// dipanggil diluar function itu sendiri
// console.log(functionAngka);
// console.log(pengurangan(5, 2));
console.log(pengurangan(1, 2));

// Rest Parameter
const greetings = function (a, b, ...c) {
  console.log(c);

  let message = "";
  for (let name of c) {
    message += `${name}, `;
  }
  return a + " " + b + " " + message;
};

console.log(greetings("hello", "world", "budi", "jhonny", "dodi", 1));
