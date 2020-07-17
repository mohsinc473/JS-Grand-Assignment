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
//   document.console("Computer || " + subj1 + "</br>");
//   document.console("English || " + subj2 + "</br>");
//   document.console("Probility || " + subj3 + "</br>");
//   document.console("Percentage - " + percen + "%" + "</br>");
//   document.console("Average - " + aver + "</br>");
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
// var inp = prompt("console a sentence");
// for (i = 0; i < inp.length; i = i + 2) {
//   var ele = inp.slice(0, i + 2);
//   occu(ele);
// }

// Task 8:
// function meter(kilo) {
//   var metr = kilo * 1000;
//   document.console(kilo + " Km = " + metr + " m" + "</br>");
// }
// function feet(kilo) {
//   var fet = kilo * 3280;
//   document.console(kilo + " Km = " + fet + " ft" + "</br>");
// }
// function inches(kilo) {
//   var metr = kilo * 39370;
//   document.console(kilo + " Km = " + metr + " in" + "</br>");
// }
// function centiM(kilo) {
//   var metr = kilo * 100000;
//   document.console(kilo + " Km = " + metr + " cm" + "</br>");
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
// document.console(
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
// function change(){
//     var imgCar = document.getElementById("carimg")
//     imgCar.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-model-s-1563301327.jpg"
// }
// function org(){
//     var imgOr = document.getElementById("carimg")
//     imgOr.src = "https://www.jamesedition.com/stories/wp-content/uploads/2018/02/8f35ba26fe296e36b3a96ee5416259b4.jpg"
// }

// Task 5:
// var a = 0;
// function inc(){
//     var incr = document.getElementById("count")
//     incr.value = ++a;
// }
// function dec(){
//     var decr = document.getElementById("count")
//     decr.value = --a;
// }

//  CHAPTER # 49 - 52

// Task 1:
// function signup() {
//   var name = document.getElementById("name");
//   var fname = document.getElementById("fname");
//   var DOB = document.getElementById("DOB");
//   document.write("Name: " + name.value + "</br>");
//   document.write("Father Name: " + fname.value + "</br>");
//   document.write("Date of Birth: " + DOB.value + "</br>");
// }

// Task 2:
// function show(){
//     var para = document.getElementById("para")
//     para.innerHTML = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals."
// }

// Task 3:
// function dele(selId) {
//   document.getElementById(selId).remove();
// }
// function edit1() {
//   var name1 = document.getElementById("name1").value;
//   var fname1 = document.getElementById("fname1").value;
//   var DOB1 = document.getElementById("DOB1").value;
//   var email1 = document.getElementById("email1").value;

//   document.write("Student-1 Details: " + "</br>");
//   document.write("Name: " + name1 + "</br>");
//   document.write("Father Name: " + fname1 + "</br>");
//   document.write("Date of Birth: " + DOB1 + "</br>");
//   document.write("E-mail: " + email1 + "</br>");
// }
// function edit2() {
//   var name2 = document.getElementById("name2").value;
//   var fname2 = document.getElementById("fname2").value;
//   var DOB2 = document.getElementById("DOB2").value;
//   var email2 = document.getElementById("email2").value;

//   document.write("Student-2 Details: " + "</br>");
//   document.write("Name: " + name2 + "</br>");
//   document.write("Father Name: " + fname2 + "</br>");
//   document.write("Date of Birth: " + DOB2 + "</br>");
//   document.write("E-mail: " + email2 + "</br>");
// }

//  CHAPTER # 58 - 67

// Task 1:
// i-)
// var parentID = document.getElementById("main-content");
// ii-)
// var Child = parentID.childNodes;
// for (i = 1; i < Child.length; i = i + 2) {
//   console.log(Child[i]);
// }
// iii-)
// var element = document.getElementsByClassName("render");
// for (i = 0; i < element.length; i++) {
//   document.write(element[i].innerHTML + "</br>");
// }
// iv-)
// var name = "Mohsin";
// document.getElementById("first-name").value = name;
// alert(name);
// v-)
// var lastName = "Arif";
// var email = "mohsinsheikh473@gmail.com";
// document.getElementById("last-name").value = lastName;
// document.getElementById("email").value = email;
// alert(lastName);
// alert(email);

// Task 2:
// i-)
// var nType = document.getElementById("form-content").nodeType;
// document.write(nType+"</br>");
// ii-)
// var nType2 = document.getElementById("lastName").nodeType;
// var chNode = document.getElementById("lastName").childNodes;
// document.write(nType2+"</br>");
// console.log(chNode+"</br>");
// iii-)
//  cannot replace childNode because their is no child of id "lastName"
// iv-)
// var parent = document.getElementById("main-content").firstChild;
// var parent1 = document.getElementById("main-content").lastChild;
// document.write(parent + "</br>");
// document.write(parent1 + "</br>");
// v-)
// var fam = document.getElementById("lastName").nextSibling;
// var fam1 = document.getElementById("lastName").previousSibling;
// document.write(fam + "</br>");
// document.write(fam1 + "</br>");
// vi-)
// var son = document.getElementById("email").parentNode;
// var son1 = document.getElementById("email").nodeType;
// document.write(son + "</br>");
// document.write(son1 + "</br>");
