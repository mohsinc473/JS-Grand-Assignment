// CHAPTER # 38 - 42

// Task 1:
// function power(a,b) {
//   var res = a ** b;
//   return res;
// }
// var a = +prompt("Enter 1st number");
// var b = +prompt("Enter 2nd number");
// alert(power(a,b));

// Task 2:
// function leapYear(year) {
//   if (year % 4 == 0) {
//     alert(year + " is a leap year");
//   } else {
//     alert(year + " is not a leap year");
//   }
// }
// var year = +prompt("Enter the year");
// alert(leapYear(year));

// Task 3:
// function triS(a, b, c) {
//   var s = (a + b + c) / 2;
//   return s;
// }
// function triArea() {
//   var S = triS(a, b, c);
//   var area = S*(S - a)*(S - b)*(S - c);
//   return area;
// }
// var a = +prompt("Enter the value of a");
// var b = +prompt("Enter the value of b");
// var c = +prompt("Enter the value of c");
// triS(a, b, c);
// alert("Area of triangle: " + triArea());

// Task 4:
// function average(subj1, subj2, subj3) {
//   var avg = (subj1 + subj2 + subj3) / 3;
//   return avg;
// }
// function percentage(subj1, subj2, subj3) {
//   var percen = ((subj1 + subj2 + subj3) * 100) / 300;
//   return percen;
// }
// function main() {
//   var aver = average(subj1, subj2, subj3);
//   aver = aver.toFixed(2);
//   var percen = percentage(subj1, subj2, subj3);
//   percen = percen.toFixed(2);
//   document.write("Computer || " + subj1 + "</br>");
//   document.write("English || " + subj2 + "</br>");
//   document.write("Probility || " + subj3 + "</br>");
//   document.write("Percentage - " + percen + "%" + "</br>");
//   document.write("Average - " + aver + "</br>");
// }
// var subj1 = +prompt("Enter your marks");
// var subj2 = +prompt("Enter your marks");
// var subj3 = +prompt("Enter your marks");
// main();

// Task 5:
// function indexOf(str, char) {
//   for (i = 0; i < str.length; i++) {
//     if (char === str[i]) {
//       alert("Index of " + char + " is " + i);
//       break;
//     } else {
//       alert("Not found");
//     }
//   }
// }
// var str = prompt("Enter a string");
// var char = prompt("Enter chr to find in str");
// indexOf(str, char);

// Task 6:
function delVowel(txt) {
  for (i = 0; i < txt.length; i++) {
    if (
      txt[i] == "a" ||
      txt[i] == "e" ||
      txt[i] == "i" ||
      txt[i] == "o" ||
      txt[i] == "u"
    ) {
      txt.replace(txt[i], ",");
    }
  }
  alert(txt);
}
var txt = prompt("Enter a string");
delVowel(txt);
