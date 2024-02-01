// Write a code to find area of rectangle
let l1 = 5;
let w1 = 3;

const rectangleArea = l1 * w1;
console.log(rectangleArea);

// Write a code to find perimeter of rectangle
let l2 = 5;
let w2 = 3;

const rectanglePerimeter = 2 * (l2 + w2);
console.log(rectanglePerimeter);

// Write a code to find diameter, circumference and area of circle
const pi = 3.14;
console.log(Math.ceil(pi));
// const pi = Math.PI;
let r1 = 5;

const circleDiameter = 2 * r1;

const circleCircumference = pi * circleDiameter;

const circleArea = pi * (r1 * r1);

console.log(circleDiameter);
console.log(circleCircumference);
console.log(circleArea);

// Write a code to find angles of triangle if two angles are given
let a1 = 60;
let a2 = 80;

const triangleAngle = 180 - (a1 + a2);
console.log(triangleAngle);

// Write a code to get differences between dates in days
let date1 = new Date("2022-01-01");
let date2 = new Date("2022-01-31");

const dateDifferences = (date2 - date1) / (1000 * 3600 * 24);
console.log(dateDifferences);

// Write a code to convert days to years, months and days
let day1 = 400;

const years = day1 / 365;
const months = (day1 % 365) / 30;
const days = (day1 % 365) % 30;

console.log(
  `${years.toFixed()} tahun, ${months.toFixed()} bulan, ${days} hari`
);
