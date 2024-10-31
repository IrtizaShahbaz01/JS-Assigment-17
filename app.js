// //                  ::Chap 38-42::


// // Custom Power Function:


// function power(a, b) {
//   return Math.pow(a, b);
// }
// console.log(power(2, 3));

// // Leap Year Function:


// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
// console.log(isLeapYear(2020));

// // Area of Triangle:


// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//   const S = calculateS(a, b, c);
//   return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }
// console.log(calculateArea(3, 4, 5));

// // Average and Percentage:


// function average(marks) {
//   return marks.reduce((a, b) => a + b, 0) / marks.length;
// }

// function percentage(marks) {
//   const total = 300;
//   return (marks.reduce((a, b) => a + b, 0) / total) * 100;
// }

// function mainFunction(marks) {
//   console.log("Average:", average(marks));
//   console.log("Percentage:", percentage(marks));
// }

// mainFunction([85, 90, 78]);

// // Custom IndexOf:


// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(customIndexOf("hello", "e"));

// // Delete All Vowels:

// function deleteVowels(sentence) {
//   return sentence.replace(/[aeiouAEIOU]/g, '');
// }
// console.log(deleteVowels("This is a test sentence"));

// // Count Successive Vowels (Switch Statement):


// function countSuccessiveVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length - 1; i++) {
//     switch (str[i] + str[i + 1]) {
//       case "aa":
//       case "ae":
//       case "ai":
//       case "ao":
//       case "au":
//       case "ea":
//       case "ee":
//       case "ei":
//       case "eo":
//       case "eu":
//       case "ia":
//       case "ie":
//       case "ii":
//       case "io":
//       case "iu":
//       case "oa":
//       case "oe":
//       case "oi":
//       case "oo":
//       case "ou":
//       case "ua":
//       case "ue":
//       case "ui":
//       case "uo":
//         count++;
//         break;
//     }
//   }
//   return count;
// }
// console.log(countSuccessiveVowels("Pleases read this application and give me gratuity"));

// // Distance Conversion Functions:


// function convertToMeters(km) {
//   return km * 1000;
// }

// function convertToFeet(km) {
//   return km * 3280.84;
// }

// function convertToInches(km) {
//   return km * 39370.1;
// }

// function convertToCentimeters(km) {
//   return km * 100000;
// }

// const distance = 5;
// console.log(convertToMeters(distance));
// console.log(convertToFeet(distance));
// console.log(convertToInches(distance));
// console.log(convertToCentimeters(distance));

// // Overtime Pay Calculation:


// function overtimePay(hoursWorked) {
//   const overtimeRate = 12;
//   const overtimeHours = hoursWorked - 40;
//   return overtimeHours > 0 ? overtimeHours * overtimeRate : 0;
// }
// console.log(overtimePay(45));

// // Currency Notes Calculation:

// function currencyNotes(amount) {
//   const hundred = Math.floor(amount / 100);
//   amount %= 100;
//   const fifty = Math.floor(amount / 50);
//   amount %= 50;
//   const ten = Math.floor(amount / 10);
//   return { hundred, fifty, ten };
// }
// console.log(currencyNotes(980));








//            :: Chap 43-48: