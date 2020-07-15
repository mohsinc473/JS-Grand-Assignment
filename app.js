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
//    KARNA  HA
// function delVowel(txt) {
//   for (i = 0; i < txt.length; i++) {
//     if (
//       txt[i] == "a" ||
//       txt[i] == "e" ||
//       txt[i] == "i" ||
//       txt[i] == "o" ||
//       txt[i] == "u"
//     ) {
//       txt.slice(txt[i]);
//     }
//   }
//   alert(txt);
// }
// var txt = prompt("Enter a string");
// delVowel(txt);

// Task 7:
//     KARNA   HA
// function occu(ele) {
//   switch (ele) {
//     case "ae":
//       alert("ae");
//       break;
//     case "ai":
//       alert("ai");
//       break;
//     case "ao":
//       alert("ao");
//       break;
//     case "au":
//       alert("au");
//       break;
//     case "ea":
//       alert("ea");
//       break;
//     case "ei":
//       alert("ei");
//       break;
//     case "eo":
//       alert("eo");
//       break;
//     case "eu":
//       alert("eu");
//       break;
//     case "ia":
//       alert("ia");
//       break;
//     case "ie":
//       alert("ie");
//       break;
//     case "io":
//       alert("io");
//       break;
//     case "iu":
//       alert("iu");
//       break;
//     case "oa":
//       alert("oa");
//       break;
//     case "oe":
//       alert("oe");
//       break;
//     case "oi":
//       alert("oi");
//       break;
//     case "ou":
//       alert("ou");
//       break;
//     case "ua":
//       alert("ua");
//       break;
//     case "ue":
//       alert("ue");
//       break;
//     case "ui":
//       alert("ui");
//       break;
//     case "uo":
//       alert("uo");
//       break;
//     default:
//       alert("Not found");
//   }
// }
// var inp = prompt("Write a sentence");
// for (i = 0; i < inp.length; i = i + 2) {
//   var ele = inp.slice(0, i + 2);
//   occu(ele);
// }

// Task 8:
// function meter(kilo) {
//   var metr = kilo * 1000;
//   document.write(kilo + " Km = " + metr + " m" + "</br>");
// }
// function feet(kilo) {
//   var fet = kilo * 3280;
//   document.write(kilo + " Km = " + fet + " ft" + "</br>");
// }
// function inches(kilo) {
//   var metr = kilo * 39370;
//   document.write(kilo + " Km = " + metr + " in" + "</br>");
// }
// function centiM(kilo) {
//   var metr = kilo * 100000;
//   document.write(kilo + " Km = " + metr + " cm" + "</br>");
// }
// var kilo = +prompt("Enter the distance in kilometer");
// meter(kilo);
// feet(kilo);
// inches(kilo);
// centiM(kilo);

// Task 9:
// function overTime(hr){
//     var pay = hr *12
//     alert(pay+" Rs is your overtime pay")
// }
// var hr = +prompt("Enter the extra hours")
// overTime(hr)

// Task 10:
// var withDraw = +prompt("Enter the amount");
// var _100 = parseInt(withDraw / 100);
// withDraw = withDraw - _100 * 100;
// var _50 = parseInt(withDraw / 50);
// withDraw = withDraw - _50 * 50;
// var _10 = parseInt(withDraw / 10);
// document.write(
//   "You will have " +
//     _100 +
//     " hundred notes " +
//     _50 +
//     " fifty notes and " +
//     _10 +
//     " ten notes."
// );

// CHAPTER # 43 - 48

// Task 1: ( In HTML )
// Task 2: ( In HTML )

// Task 3:
// function del(id) {
//   var tr = document.getElementById(id);
//   tr.remove(tr);
// }

// Task 4:
function img(){
    
}