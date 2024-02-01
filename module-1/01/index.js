// Comment
// ctrl + k + c, untuk windows
// command + k + c, untuk macbook

// Uncomment
// ctrl + k + u , untuk windows
// command + k + u, unuk macbook

// ctrl + ~, membuka atau menutup terminal
// ctrl + b, membuka atau menutup explorer

console.log("Hello World");
console.log("hello world 2");
console.log("test");

let kotakSepatu;
kotakSepatu = "Adidas";
console.log(kotakSepatu);

let kotakTas = "gucci";
console.log(kotakTas);
kotakTas = "hermes";
console.log(kotakTas);

var kotakEarphone = "jbl";
console.log(kotakEarphone);
var kotakEarphone = "marshal";
console.log(kotakEarphone);

const kotakBaju = "tommy";
const kotakBajuTommy = "a";
console.log(kotakBaju);

// variable untuk menyimpan link ke google
const google = "https://www.google.com";
const facebook = "https://www.facebook.com";

// const $satu = 1;
// console.log($satu);

// const satu1 = 1;

const satu = 1;
// const Satu = 1;

// ==== Primitive Data Type ====

// string variable
const text = "sebuah string tipe data";
console.log(typeof text);

// number variable
const angka = 123;
console.log(typeof angka);

// boolean variable
const boolTrue = true;
const boolFalse = false;
console.log(typeof boolTrue);
console.log(typeof boolFalse);

// null variable
const nulls = null;
console.log(typeof nulls);

// undefined variable
const undefine = undefined;
console.log(typeof undefine);

// ====================================
// ==== Non-Primitive Data Type ====

// object variable
const objects = {
  nama: "budi",
  umur: 22,
};
console.log(typeof objects);
// objects.nama = "doremi";
console.log(objects);

// array variable
const array = [1, 2, 3, 4, 5];
console.log(typeof array);
// ====================================

// immutable
let name = "budi";
name = "doremi";
console.log(name);

let age = 21;
console.log(age);
let newAge = age;
console.log(newAge);
age = 22;
console.log(age);
console.log(newAge);

// mutable
const person = {
  nama: "budi",
  umur: 21,
};
console.log(person);
person.nama = "doremi";
console.log(person);

const car = {
  brand: "ferarri",
  tire: 4,
};
const newCar2 = {
  ...car,
};
const newCar = car;
newCar.tire = 4;
newCar2.tire = 5;
console.log(car);
console.log(newCar);
console.log(newCar2);

// === string build in method ===

const string = "12345";
console.log(string.slice(0, 3));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.replace(/L/g, 1));

const strings = `${string} WORLD, THIS IS PURWADHIKA, LETS LEARN SOMETHING NEW EVERYDAY`;

console.log(strings);

const numbers = 5.1234;
// console.log(numbers.);

console.log(parseInt("12345"));
console.log(String(12345));

const js = "1" + "1";
console.log(js);

console.log(Boolean(0));
console.log(Boolean(""));

let dateNow = new Date();
console.log(dateNow);
const dateNowFormat = dateNow.toLocaleString("in-ID", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
console.log(dateNowFormat);

let customDate = new Date("2024-01-01");
console.log(customDate);
let add0Day = new Date(0);
console.log(add0Day);
let add1Day = new Date(24 * 3600 * 1000);
console.log(add1Day);

let add1DayFromNow = new Date(dateNow.getTime() + 24 * 3600 * 1000);
console.log(add1DayFromNow);

let newDate = "2023-02-01";
let newDate1 = new Date("2023-01-01");
console.log(typeof newDate);
console.log(typeof newDate1);

console.log(newDate1.getFullYear());
console.log(newDate1.getDate());
// dalam javascript jika ingin mendapatkan bulan yang diinginkan
// harus ditambah 1 karena bulan dalam javascript dimulai dari 0
console.log(newDate1.getMonth() + 1);

// let value = "1.2";
// let newValue = Number(value) + 1;
// console.log(newValue);
// console.log(value);

// value = 2;
// console.log(value);

// console.log("HELLO" + " WORLD");

const nums = 1 + (1 * 1) / 1;
console.log(nums);

// 5 adalah operand pertama
// 2 adalah operand kedua
// jika ada 2 operand maka disebut binary
const operand = 5 * 2;

// jika hanya ada 1 operand maka disebut unary
let x = 2;
x = ++x; // x = 1, x = 2 + 1 // x = x + x;
//x = --x; // x = 2, x = 2 - 1 // x = x - x;
console.log(x);

let kalimat = "Hello";
let kalimat2 = "World!";
let angka1 = 1234;
// const newKalimat = kalimat + " " + kalimat2;
const newKalimat = `${kalimat} ${kalimat2} ${angka1}`;
console.log(newKalimat);
console.log(123 + true);

let n = 2;
// n += 5; // n = 2 + 5 / n = n + 5
n *= 2; // n = 2 * 2 / n = n * 5
console.log(n);

let y = 5;
// prefix form
// console.log(++y); // 5 + 1

// postfix form

console.log(y++); // 6 + 1
console.log(y);

let num1 = 2;
let num2 = "1";

// pengecekan value tanpa mempedulikan tipe data
console.log(num1 == num2);
console.log(num1 != num2);

// pengecekan value yang mempedulikan tipe data
console.log(num1 === num2);
console.log(num1 !== num2);

console.log(num1 > num2);
console.log(num1 < num2);

console.log(num1 >= num2);
console.log(num1 <= num2);
