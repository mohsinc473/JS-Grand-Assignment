// CHAPTER # 1


// alert("Welcome to JavaScript!");

// alert("Error! Please enter a valid password.")

// alert("Welcome to JS Land...\nHappy Coding!");

// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.")

// CHAPTER # 2


// var username; 

// var myName = "Muhammad Mohsin Arif";

// var message = "Hello World";
// alert(message);

// var stdName = "jhone Doe" , stdAge = "15 years old" , stdProfession = "Certified Mobile Application Development";
// alert(stdName);
// alert(stdAge);
// alert(stdProfession); 

// var Pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(Pizza); 

// var email = "mohsinsheikh473@gmail.com";
// alert("My email Address is "+email); 

// var book = "A smater way to learn JavaScript";
// alert("I am trying to learn from the book "+book);

// document.write("Yah! I can write HTML content through JavaScript");

// CHAPTER # 3


// var age = 19;
// alert("I am "+age+" years old");

// var visit = 14;
// alert("You have visited this site "+visit+" times");

// var birthYear = 2001;
// document.write("My birth year is "+birthYear+"\n" + "<br/> Data type of my birth year variable is number"); 

// var visitorName = prompt ("Enter your name");
// var productTitle = prompt ("Product Name");
// var quantity = +prompt ("Quantity");
// document.write(visitorName + " ordered "+quantity + " " + productTitle + " on outfitters.com"); 

// CHAPTER # 4


// var $my_1Variable , $name , _name , name ;
// var 1stVariable , %thisone , var ;  # illegal variables
// document.write("<h2> Rules for naming JS variable <h2/> <br/>");
// document.write("Variable names can only contain, numbers, $ and _ . For example : $my_1Variable <br/>");
// document.write("Variables must begin with a letter, $, or _ . For example : $name, _name or name <br/>");
// document.write("Variable names are case sensitive <br/>Variables names should not be JS keywords"); 

// CHAPTER # 5


// var a = 10 , b = 20 , sum , sub , multi , div , mod;
// sum = a+b;
// sub = a-b;
// multi = a*b;
// div = a/b;
// mod = a%b;
// document.write("Sum of "+a+" and "+b+" is "+sum+"<br/>");
// document.write("Subtraction of "+a+" and "+b+" is "+sub+"<br/>");
// document.write("Multiplication of "+a+" and "+b+" is "+multi+"<br/>");
// document.write("Division of "+a+" and "+b+" is "+div+"<br/>");
// document.write("Modulus of "+a+" and "+b+" is "+mod+"<br/>");

// var exp ;
// document.write("Value after variable declaration is "+exp+"<br/>");
// exp = 10;
// document.write("Initial value: "+exp+"<br/>");
// exp = ++exp;
// document.write("Value after increment is: "+exp+"<br/>");
// exp += 10;
// document.write("Value after addition is: "+exp+"<br/>");
// exp = --exp;
// document.write("Value after decrement is: "+exp+"<br/>");
// exp /= 2;
// document.write("The remainder is: "+exp);

// var tickedPrice = 600;
// var numberofTickets = +prompt("Number of Tickets")
// var totalPrice = tickedPrice * numberofTickets;
// document.write("Total cost to buy "+numberofTickets+" tickets of a movie is "+totalPrice+" PKR"); 

// var table = 5 ;
// document.write("Table of "+table+"<br/>");
// document.write("5 * 1  = "+table*1+"<br/>");
// document.write("5 * 2  = "+table*2+"<br/>");
// document.write("5 * 3  = "+table*3+"<br/>");
// document.write("5 * 4  = "+table*4+"<br/>");
// document.write("5 * 5  = "+table*5+"<br/>");
// document.write("5 * 6  = "+table*6+"<br/>");
// document.write("5 * 7  = "+table*7+"<br/>");
// document.write("5 * 8  = "+table*8+"<br/>");
// document.write("5 * 9  = "+table*9+"<br/>");
// document.write("5 * 10  = "+table*10+"<br/>"); 

// var C = +prompt("Enter temperature in Celsius");
// Fahrenheit = (C*9/5)+32;
// document.write(C+" C is"+" "+Fahrenheit+" F <br/>");
// var F = +prompt("Enter temperature in Fahrenheit");
// Celsius = (F-32)*5/9;
// document.write(F+" F is"+" "+Celsius+" C"); 

// var item1Price = 700 ;
// var quantityItem1 = 2;
// var item2Price = 1000 ;
// var quantityItem2 = 3;
// var shipingCharges = 500;
// var costTotal = item1Price+item2Price+quantityItem1+quantityItem2+shipingCharges;
// document.write("Shopping Cart"+"<br/>");
// document.write("Price of item 1 is: "+item1Price+"<br/>");
// document.write("Quantity of item 1 is: "+quantityItem1+"<br/>");
// document.write("Price of item 2 is: "+item2Price+"<br/>");
// document.write("Quantity of item 2 is: "+quantityItem2+"<br/>");
// document.write("Shipping Charges: "+shipingCharges+"<br/>");
// document.write("Total cost of your order is: "+costTotal+"<br/>"); 

// var marksTotal = 1100;
// var obtainedMarks = 680;
// var Percentage = (obtainedMarks*100)/marksTotal;
// document.write("Marks Sheet"+"<br/>");
// document.write("Total Marks: "+marksTotal+"<br/>");
// document.write("Obtained Marks: "+obtainedMarks+"<br/>");
// document.write("Perentage: "+Percentage); 

// var dollar = 50;
// var riyal = 60;
// var Currency = (dollar*163)+(riyal*43);
// document.write("Currency in PKR"+"<br/>");
// document.write("Total Currency in PKR: "+Currency); 

// var burul = 10;
// burul = (burul + 5 * 10) / 2 ;
// alert(burul);

// var curnYear = 2020 , YearBirth = 2000 ;
// var AGE = curnYear - YearBirth;
// document.write("Age Calculator"+"<br/>");
// document.write("Your Age is: "+AGE); 

// var radius = 15;
// const pie = 3.1416;
// var Circum = 2*(pie*radius) , Area = pie * (radius*radius);
// document.write("The Geometrizer"+"<br/>");
// document.write("Radius of a circle: "+radius+"<br/>");
// document.write("The circumference is: "+Circum+"<br/>");
// document.write("The area is: "+Area+"<br/>"); 

// var favSnack = "Salanty" , TodayAge = 19 , maxAge = 65 , snackPerday = 2;
// var Eaten = (maxAge - TodayAge) * snackPerday;
// document.write("The Lifetime Supply Calculator"+"<br/>");
// document.write("Favourite Snack: "+favSnack+"<br/>");
// document.write("Current age: "+TodayAge+"<br/>");
// document.write("Estimated Maximum Age: "+maxAge+"<br/>");
// document.write("Amount of snack per day: "+snackPerday+"<br/>");
// document.write("You will need "+Eaten+" "+favSnack+" to last you until the ripe old age of "+maxAge+"<br/>"); 

// CHAPTER # 6 - 9


// var a = 10;
// document.write("Result; "+"<br/>")
// document.write("The value of a is: "+a+"<br/>");
// document.write("------------------------------------"+"<br/>");
// a = ++a;
// document.write("The value of ++a is: "+a+"<br/>"); 
// document.write("Now the value of a is: "+a+"<br/>");
// a = a++;
// document.write("The value of a++ is: "+a+"<br/>");
// document.write("Now the value of a is: "+a+"<br/>");
// a = --a;
// document.write("The value of --a is: "+a+"<br/>"); 
// document.write("Now the value of a is: "+a+"<br/>");
// a = a--;
// document.write("The value of a-- is: "+a+"<br/>"); 
// document.write("Now the value of a is: "+a+"<br/>"); 

// var x = 2 , y = 1;
// var remai = --x - --y + ++y + y--;
// document.write("x is: "+x+"<br/>");
// document.write("y is: "+y+"<br/>");
// document.write("result is: "+remai+"<br/>"); 

// var input = prompt("Your Name");
// alert("Welcome "+input); 

// var Subj1 = prompt("Enter the subject name");
// var MarksSubj1 = +prompt("Enter the Marks of the Subject");
// var Subj2 = prompt("Enter the subject name");
// var MarksSubj2 = +prompt("Enter the Marks of the Subject");
// var Subj3 = prompt("Enter the subject name");
// var MarksSubj3 = +prompt("Enter the Marks of the Subject");
// var SubjMAX = 100;
// var MarksTotal = SubjMAX + SubjMAX + SubjMAX;
// var ObtainTotal = MarksSubj1 + MarksSubj2 + MarksSubj3;
// var PerSubj1 = (MarksSubj1*100)/SubjMAX; 
// var PerSubj2 = (MarksSubj2*100)/SubjMAX; 
// var PerSubj3 = (MarksSubj3*100)/SubjMAX;
// var PercenTotal = ((MarksSubj1 + MarksSubj2 + MarksSubj3) * 100) / MarksTotal;
// document.write("Subject \t Total Marks \t Obtained Marks \t Percentage"+"<br/>");
// document.write(Subj1+" \t "+SubjMAX+" \t "+MarksSubj1+" \t "+PerSubj1+"<br/>");
// document.write(Subj2+" \t "+SubjMAX+" \t "+MarksSubj2+" \t "+PerSubj2+"<br/>");
// document.write(Subj3+" \t "+SubjMAX+" \t "+MarksSubj3+" \t "+PerSubj3+"<br/>");
// document.write(" \t "+MarksTotal+" \t "+ObtainTotal+" \t "+PercenTotal+"<br/>"); 

// CHAPTER # 9 - 11


// var city = prompt("Enter the name of a city");
// if ( city == "Karachi"){
//     alert("Welcome to the city of lights");
// }
// else{
//     alert("You are not in the city of lights");
// } 


// var gender = prompt("Please insert your sex");
// if ( gender == "male"){
//     alert("Good Morning Sir");
// }
// else{
//     alert("Good Morning Ma'am");
// } 


// var lightColor = prompt("Write the color of light");
// if ( lightColor == "Red"){
//     alert("Must Stop");
// }
// else if ( lightColor == "Yellow"){
//     alert("Ready to move");}
// else if ( lightColor == "Green"){
//     alert("Move now");}
// else{
//     alert("Not a traffic signal color");
// } 


// var fuel = +prompt("Enter the fuel amount");
// if ( fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("No need to refill the fuel");
// } 


// var a = 4;
// if (++a === 5){ 
//     alert("given condition for variable a is true");
// }
// var b = 82; 
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// } 
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// } 
// if(c === 14){
//     alert("condition 4 is true");
// }
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// if (true){
//     alert("True"); 
// } 
// if (false){
//     alert("False");
// } 
// if("car" < "cat"){
//     alert("car is smaller than cat");
// } 


// var Subj1 = prompt("Enter the subject name");
// var MarksSubj1 = +prompt("Enter the Marks of the Subject");
// var Subj2 = prompt("Enter the subject name");
// var MarksSubj2 = +prompt("Enter the Marks of the Subject");
// var Subj3 = prompt("Enter the subject name");
// var MarksSubj3 = +prompt("Enter the Marks of the Subject");
// var MarksTotal = 300;
// var ObtainTotal = MarksSubj1 + MarksSubj2 + MarksSubj3;
// var PercenTotal = ((MarksSubj1 + MarksSubj2 + MarksSubj3) * 100) / MarksTotal;
// var Grade , Remarks;
// if (PercenTotal >= 80){
//     Grade = 'A+';
//     Remarks = "Excellent";
// }
// else if (PercenTotal >= 70 & PercenTotal < 80){
//     Grade = 'A';
//     Remarks = "Good";
// }
// else if (PercenTotal >= 60 & PercenTotal < 70){
//     Grade = 'B';
//     Remarks = "You need to improve";
// }
// else if (PercenTotal < 60 ){
//     Grade = 'F';
//     Remarks = "Sorry";
// }
// document.write("Marks Sheet"+"<br/>")
// document.write("Total Marks: "+MarksTotal+"<br/>");
// document.write("Marks Obtained: "+ObtainTotal+"<br/>");
// document.write("Percentage: "+PercenTotal+"<br/>");
// document.write("Grade: "+Grade+"<br/>");
// document.write("Remarks: "+Remarks+"<br/>"); 

// var guess = 5 ;
// var num = +prompt("Guess the number between 1 to 10:","Enter the number");
// if (guess === num){
//     alert("Bingo!");
// }
// else if (num+1 === guess || num-1 === guess){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Wrong number, try again");
// } 

// var div = +prompt("Enter the number");
// if ( div%3 === 0 ){
//     alert("Number is divisible by 3");
// }
// else{
//     alert("Not divisible by 3");
// } 


// var even = +prompt("Enter the number");
// if ( even%2 === 0 ){
//     alert("Number is Even");
// }
// else{
//     alert("Number is Odd");
// } 


// var temp = +prompt("Enter the temperatue");
// var msg;
// if (temp > 40){
//     msg = "It is too hot outside";
// }
// else if (temp >= 30 & temp < 40){
//     msg = "The Weather today is Normal";
// }
// else if (temp >= 20 & temp < 30){
//     msg = "Today’s Weather is cool";
// }
// else if (temp >= 10 & temp < 20){
//     msg = "OMG! Today’s weather is so Cool";
// }
// else{
//     msg = "It's frezzing cold"
// }
// alert(msg); 


// var firstNumber = +prompt("Enter the firstNumber");
// var secondNumber = +prompt("Enter the secondNumber");
// var operation = prompt('Enter operator');
// var RESULT;
// if (operation === '+'){
//     RESULT = firstNumber + secondNumber;
// }
// else if (operation === '-'){
//     RESULT = firstNumber - secondNumber;
// }
// else if (operation === '*'){
//     RESULT = firstNumber * secondNumber;
// }
// else if (operation === '/'){
//     RESULT = firstNumber / secondNumber;
// }
// else if (operation === '%'){
//     RESULT = firstNumber % secondNumber;
// }
// else{
//     alert("Wrong operator")
// }
// alert(RESULT); 

// CHAPTER # 12 - 13


// var Charac = prompt("Enter the Character");
// var secondNumber = +prompt("Enter the Number");
// if ( Charac === 'A' & secondNumber === 65 ){
//     alert("ASCII Found");
// }
// else if ( Charac === 'Z' & secondNumber === 90 ){
//     alert("ASCII Found");
// }
// else if ( Charac === 'a' & secondNumber === 97 ){
//     alert("ASCII Found");
// }
// else if ( Charac === 'z' & secondNumber === 122 ){
//     alert("ASCII Found");
// } 


// var firstInt = +prompt("Enter the firstNumber");
// var secondInt = +prompt("Enter the secondNumber");
// if ( firstInt > secondInt ){
//     alert("First interger is greater");
// }
// else if ( firstInt < secondInt ){
//     alert("Second interger is greater");
// }
// else{
//     alert("Both intergers are equal");
// } 


// var checkInt = +prompt("Enter the Number");
// if ( checkInt > 0 ){
//     alert("Number is positive");
// }
// else if ( checkInt < 0 ){
//     alert("Number is negative");
// }
// else{
//     alert("Number is zero");
// } 


// var checkChar = prompt("Check Vowel",'Enter the character');
// if ( checkChar == 'a' || checkChar == 'e' || checkChar == 'i' || checkChar == 'o' || checkChar == 'u' ){
//     alert("True");
// }
// else if ( checkChar == 'A' || checkChar == 'E' || checkChar == 'I' || checkChar == 'O' || checkChar == 'U' ){
//     alert("True");
// }
// else{
//     alert("False");
// } 


// var JS = "covid-19";
// var checkPass = prompt("Enter your password");
// if ( checkPass === JS ){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// } 
 

// var greeting;
// var hour = +prompt("Enter your hour"); 
// if (hour < 18) { 
//     greeting = "Good day";
// } 
// else {
// greeting = "Good evening";
// }
// alert(greeting);


// var TimeCheck = +prompt("Enter time in 2400 format");
// if ( TimeCheck >= 0000 && TimeCheck < 1200){
//     alert("Good morning!");
// }
// else if ( TimeCheck >= 1200 && TimeCheck < 1700){
//     alert("Good afternoon!");
// }
// else if ( TimeCheck >= 1700 && TimeCheck < 2100){
//     alert("Good evening!");
// }
// else if ( TimeCheck >= 2100 && TimeCheck < 2400){
//     alert("Good night!");
// }
// else{
//     alert("Time is not with you, better luck next time")
// } 

// CHAPTER # 14 - 16


// var arrString = ["Mohsin","Nelson","Jawad","Saad","Waleed"];
// var arrNumber = [30399,30346,30498,30298,30395];
// var arrBoolean = [true,false];
// var arrMixed = [12,"Ridler",'F'];
// var eduQual = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
// document.write("Qualifications:"+"<br/>");
// document.write("1) "+eduQual[0]+"<br/>");
// document.write("2) "+eduQual[1]+"<br/>");
// document.write("3) "+eduQual[2]+"<br/>");
// document.write("4) "+eduQual[3]+"<br/>");
// document.write("5) "+eduQual[4]+"<br/>");
// document.write("6) "+eduQual[5]+"<br/>");
// document.write("7) "+eduQual[6]+"<br/>");
// document.write("8) "+eduQual[7]+"<br/>"); 

// var arrName = ["Mohsin","Nelson","Jawad"];
// var arrScore = [320,230,480];
// var TotalMark = 500;
// document.write("Score of "+arrName[0]+" is "+arrScore[0]+". Percentage: "+(arrScore[0]*100)/TotalMark+"<br/>");
// document.write("Score of "+arrName[1]+" is "+arrScore[1]+". Percentage: "+(arrScore[1]*100)/TotalMark+"<br/>");
// document.write("Score of "+arrName[2]+" is "+arrScore[2]+". Percentage: "+(arrScore[2]*100)/TotalMark+"<br/>"); 

// var arrColor = ["Red","Black","White","Blue"];
// document.write(arrColor+"<br/>");
// var colorIn = prompt("Enter the color you want to add");
// arrColor.unshift(colorIn);
// document.write(arrColor+"<br/>");
// var colorIn = prompt("Enter the color you want to add");
// arrColor.push(arrColor);
// document.write(arrColor+"<br/>");
// arrColor.unshift("Orange","Yellow");
// document.write(arrColor+"<br/>");
// arrColor.shift();
// document.write(arrColor+"<br/>");
// arrColor.pop();
// document.write(arrColor+"<br/>");
// var colorIn = prompt("Enter the color you want to add");
// var colorIndex = +prompt("At which index you want to add");
// arrColor.splice(colorIndex,0,colorIn);
// document.write(arrColor+"<br/>");
// var colorIn = prompt("Enter index at which you want to remove element");
// var colorIndex = +prompt("Enter how many elements you want to remvoe");
// arrColor.splice(colorIn,colorIndex);
// document.write(arrColor+"<br/>"); 

// var arrSort = [550,498,754,110,300,669];
// document.write("Un-sorted Numbers: "+arrSort+"<br/>");
// arrSort.sort((a, b) => a - b);
// document.write("Sorted Numbers: "+arrSort+"<br/>"); 

// var CitiesArr = ["Islamabad","Lahore","Karachi","Quetta","Peshawar"];
// var selecCiti = CitiesArr.slice(2,4);
// document.write(selecCiti+"<br/>"); 

// var arrJoin = ["This", "is", "my", "cat"];
// document.write("Array: "+arrJoin+"<br/>");
// var arrString = arrJoin.join(" ");
// document.write("String: "+arrString+"<br/>"); 

// var arrDevice = ["keyboard","mouse","printer","monitor"];
// document.write("Devices:"+"<br/>"+arrDevice+"<br/>"+"<br/>");
// for ( var i = 0 ; i<4 ; i++){
//     document.write("out:"+"<br/>"+arrDevice[i]+"<br/>");
// } 

// var arrDevice = ["keyboard","mouse","printer","monitor"];
// document.write("Devices:"+"<br/>"+arrDevice+"<br/>"+"<br/>");
// for ( var i = 3 ; i >= 0 ; i--){
//     document.write("out:"+"<br/>"+arrDevice[i]+"<br/>");
// }

// CHAPTER # 17 - 20 



// var multiArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for ( var i=0; i<3; i++){
//     for ( var j=0; j<4; j++){
//         document.write(multiArr[i][j]+" ");
//     }
//     document.write("<br/>");
// }


// for ( var i=1; i<=10; i++ ){
//     document.write(i+"<br/>");
// }


// var tableNum = +prompt("Enter a number to show its multiplication table");
// var tableLen = +prompt("Enter length mltiplication table");
// for ( var i = 1; i<=tableLen; i++){
//     document.write(tableNum+" * "+i+" = "+(tableNum*i));
//     document.write("<br/>");
// }


// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for ( var i=0; i<5; i++ ){
//     document.write(fruits[i]+"<br/>");
// }
// document.write("<br/>");
// for ( var i=0; i<5; i++ ){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br/>");
// }


// document.write("Counting: "+"<br/>");
// for( var i=1; i<=15; i++){
//     document.write(i+",");
// }
// document.write("<br/>"+"Reverse Counting: "+"<br/>");
// for( var i=10; i>=1; i--){
//     document.write(i+",");
// }
// document.write("<br/>"+"Even: "+"<br/>");
// for( var i=0; i<=20; i=i+2){
//     document.write(i+",");
// }
// document.write("<br/>"+"Odd: "+"<br/>");
// for( var i=1; i<20; i=i+2){
//     document.write(i+",");
// }
// document.write("<br/>"+"Series: "+"<br/>");
// for( var i=2; i<=20; i=i+2){
//     document.write(i+"k,");
// }


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Search your beverage");
// for ( var i=0; i<5; i++){
//     if( searchItem === A[i]){
//         document.write(searchItem+" is found at index "+i+" in our bakery.");
//         break;
//     }
// }
// document.write("<br/>");
// searchItem = prompt("Search your beverage");
// for ( var i=0; i<5; i++){
//     if( searchItem !== A[i]){
//         document.write("Sorry "+searchItem+" is not available at the moment."+"<br/>"+"Try something else.");
//         break;
//     }
// }


// var larg = [24,53,78,91,12];
// var temp;
// for ( var i=0; i<5; i++){
//     if( larg[i] > larg[i+1] ){
//         temp = larg[i];
//         document.write("The largest number is "+temp);
//     }
// }


// var larg = [24,53,78,91,12];
// var temp;
// for ( var i=0; i<5; i++){
//     for ( j=1; j<5; j++){
//         if( larg[i] < larg[j] ){
//             temp = larg[i];  
//         }
//     } 
// } document.write("Array items: "+larg+"<br/>"+"The smallest number is "+temp);


// for (var i=5; i<=100; i=i+5){
//     document.write(i+", ");
// }

















