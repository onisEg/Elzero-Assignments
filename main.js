// document.write("<h1> <span>Elzero</span> <span>Web</span><span> School</span> </h1>", "color:red; font-size:40px", "color: blue; font-size:40px;");
// document.querySelector("h1").style.color = 'red';

// console.group("group 1");
// console.log("Message One");
// console.log("Message Two");
// console.group("Child Group");
// console.log("Message One");
// console.log("Message Two");
// console.group("Grand Child Group");
// console.log("Message One");
// console.log("Message Two");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("group 2");
// console.groupEnd();

// ==================================

// console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);
// ======================================

/*
alert("any think");
console.log("Iam In Console");
document.write("Iam In Page");

==========================================

var title = "Hello Elzero";
var dis = "Elzero Web School";
var date = "25 /10";

var challenge = `
    <div class="card">
    <div class="child">
        <h2>${title}</h2>
        <p>${dis}</p>
        <span>${date}</span>
    </div>
    </div>
    <span>---------------------------</span>
`
document.write(challenge.repeat(4));
*/
// =======================================
//التكليف الاول
/*
var numberOne = 10;
var numberTow = 20;

document.write(numberOne,numberTow);
console.log(numberOne +""+ numberTow);
document.write(`${numberOne}${numberTow}`);
console.log(`${numberOne}${numberTow}`);
console.log(numberTow + "\n" + numberOne);
console.log(`${numberTow}
${numberOne}`);
*/
// ====================================
/*
var elzero;
elzero = ["os","ah","sa"];

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
*/
// =========================================
/*
console.log("\`I'm In"
"\\\"
Love \\ """ '''
++ With ++
\"""\""""
"JavaScript");
*/
// =========================================
/*
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
// _21_2021_2021_2021_20_
*/
// =========================================

/*
console.log(+100);      //100
console.log(+"100");    //100
console.log(+"-100");   //-100
console.log(+"Osama");  //NaN
console.log(+"15.5");   //15.5
console.log(+0xff);     //255
console.log(+null);     //0
console.log(+false);    //0
console.log(+true);     //1


console.log(20 + true);     //20 + 1
*/
// ======================================
// var a = 10 ;
// var b = "20";
// var c = 80;

// console.log(++a +b++ + +c++ - +a++);
// console.log( ++a );

// =========================================
/*
// التاسك
let a = 1_00;        //100
let b = 2_00.5;      //200.5
let c = 1e2;        //100
let d = 2.4;        //2.4

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** parseInt(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));

// Use Variables b + d To Get This Valus
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number
*/
//===================================================

/*
let theName = "  Ahmed  ";
console.log(theName.trim().charAt(2).toUpperCase());

// console.log(theName[1]);    //h
// console.log(theName.charAt(1));     //h
// console.log(theName.length);


var a = "Elzero Web School";

// console.log(a.slice(2,6)+ a.charAt().toUpperCase());
console.log(a.charAt(2).toUpperCase() + a.slice(3,6));      // Zero
console.log(a.charAt(13).toUpperCase().repeat(8));      //HHHHHHHH
console.log(a.split(" ",1));                            //Elzero
console.log(a.substr(0,6)+ " " + a.substr(11));         // Elzero
console.log(a.charAt(0).toLowerCase() + a.substr(1,a.length-2).toUpperCase() + a.charAt(a.length-1).toLowerCase()) ;       //eLZERO WEB SCHOOl

var st = "Elzero Web School";

if((st.length * 2).toString() === "34"){
    console.log("good test");
}

if(st.slice(st.indexOf("W")-1,st.indexOf("W")+1).toLowerCase().trim() === "w"){
    console.log("var");
}


let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 to 40 ");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

a < 20
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log("10 to 40 ")
    : a > 40
    ? console.log("> 40")
            : console.log("Unknown");


var st = "Elzero Web School";
console.log(typeof st);

if ( typeof st.length  !== "string") {
    console.log("not equial");
}

if ( typeof st.length  === "number") {
    console.log("good");
}
if (st.split(" ", 1) + st.split(" ", 1) === "ElzeroElzero") {
    console.log("good");
}

console.log(st.split(" ", 1) + st.split(" ", 1));



let job = "Support";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
    console.log(salary);
} else if (job === "IT" || job === "Support") {
    salary = 6000;
    console.log(salary);
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}

let job = "Manager";
let salary = 0;

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(salary);
        break;

    default:
        break;
}

let holidays = 0;
let money = 0;

if (holidays == 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays == 1 || 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
}
*/



// console.log(100 == "100");
// console.log(100 != 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(typeof-50 == typeof +"-40"); // true
// console.log(typeof 10 == typeof -"-40"); // true
// console.log("10" !== 10); // true
// console.log(!20 == false); // true



/*

let num1 = 10;
let num2 = 20;

console.log(num1 <= num2); // true
console.log(num1< num2); // true
console.log(num2> num1); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(typeof num1 == typeof num2); // true



let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a < b  && a > c); // true
console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c)); // true





// case 1 : let num = 9; // "009"
// case 2 : let num = 20; // "020"
// case 3 : let num = 110; // "110"



if (num < 10) {
    console.log("00"+ num);
} else if (num > 10 && num < 100) {
    console.log("0"+ num);
} else if (num >= 100) {
    console.log(num);
}
*/


/*
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log(`${num1} Is The Same Value As ${str}`);
} else if (num1 === str) {
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
} else if (typeof str == typeof str2) {
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}


// Edit What You Want Here

let num1 = 15;
let num2 = 10;
let num3 = 15;
let num4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times


// Condition 1

if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}

*/
/*
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
// Output => "No Appointments Available"

let day = "Monday";
let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
// Output => "Its Not A Valid Day"


let day = "   monday   ";
day = day.trim();
day = day.charAt(0).toUpperCase()
switch (day) {
    case "Friday":
    case "Saturday":
    case "sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM"); \
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
        break;
}


let zero = 0;
let counter = 3;

var my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];


// console.log(my.slice(zero,++counter).reverse());

// console.log(my.slice(++zero, counter).reverse());


// console.log(my[++zero][++counter] + my[--counter][--zero]);




// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// var myFriends2 = myFriends;
// // myFriends2.pop();

// let num = 3;

// Method 1
// console.log(   myFriends2 ); // ["Ahmed", "Elham", "Osama"];

// Method 3
// console.log(myFriends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
// console.log(myFriends.slice(-(num+1),-1)); // ["Ahmed", "Elham", "Osama"];




// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// friends.pop(), friends.shift();
// // Write Your Code Here

// console.log(friends); // ["Eman", "Osama"]





// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = arrTwo[2]+","+ arrOne.reverse()+","+arrTwo[1]+","+arrTwo[0];

// // Write One Single Line Of Code

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]






// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(+false); // ZERO




let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// if (haystack.includes(needle)) {
//     console.log("found");
// }

// haystack.includes(needle)
//     ? console.log("found")
//     : console.log("not found");


if (haystack.indexOf("JS") == -1) {
    console.log("not found");
} else {
    console.log("found");
}





var myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"]
var myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

myAdmins.length = myAdmins.indexOf("Stop");

document.write(`<h3>We Have ${myAdmins.length} Admins </h3><hr> `);
var counter = 0;
for (i = 0; i < myAdmins.length; i++){
    document.write(`<h4>The Admin For Team ${i + 1} is ${myAdmins[i]} </h4>`);
    document.write(`<h6>Team Members<h5>`);

    for (j = 0; j < myEmployees.length; j++){
        if (myAdmins[i][0] === myEmployees[j][0])
            document.write(`<p>${++counter} - ${myEmployees[j]}</p>`);
    }
    counter = 0;
    document.write(`<hr>`)

}





*/





// let start = 10;
// let end = 100;
// let exclude = 40;

// for (i = start; i <= end; i += start) {
//     if (i == exclude) continue;
//     console.log(i);
// }





// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i >= end; i--) {
//     console.log(i < 10 ? "0" + i : i );
//     if (i == stop) break;
// }


// let start = 1;
// let end = 6;
// let breaker = 2;
// for (i = start; i <= end; i++) {
//     document.write(`<h6>${i}</h6>`);
//     document.write(`<p>-- ${breaker}</p>`);
//     document.write(`<p>-- ${end - breaker}</p>`);
// }






// let index = 10;
// let jump = 2;
// let end = 0;
// for (; ;){
//     if (index <= jump) break;
//     console.log(index);
//     index -= jump;

// }





// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for (i = 0; i < friends.length; i++){
//     if (letter.toUpperCase() == friends[i][0]) {
//         continue;
//     }
//     console.log(friends[i]);
// }



// let start = 0;
// let swappedName = "elZerO";
// // Output     "ELzERo"
// let name = [];
// for (i = start; i < swappedName.length; i++){
//     if (swappedName[i] == swappedName[i].toUpperCase()) {
//         name.push(swappedName[i].toLowerCase());
//     } else {
//         name.push(swappedName[i].toUpperCase());
//     }
// }
// console.log(name.join("");









// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (i = start + 1; i < mix.length; i++){
//     if (i == start) continue;
//     if (typeof mix[i] == "string") continue;
//     console.log(mix[i])
// }







// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;


// // Output
// // "1 => Sayed"
// // "2 => Mahmoud"

// while (index < friends.length) {
//     if (typeof friends[index] === "string" && !friends[index].startsWith("A")) {
//         console.log(friends[index]);
//     }
// }





// function showDetails(...data) {
//     var a = 0, b = 0, c = 0;
//     for (i = 0; i < 3; i++) {
//         typeof data[i] === "string"
//         ? (a = data[i])
//         : typeof data[i] === "number"
//         ? (b = data[i])
//         : data[i] === false
//         ? (c = "Not Availble")
//         : (c = "Avaible");
//     }
//     return console.log(`hi ${a} , your age is ${b} ,your are ${c} for hire `);
// }
// showDetails(34, false, "ahmed")



// تكليفات JavaScript Bootcamp من الدرس 057 إلى 063

// function sayHello(theName, theGender) {
//     if (theGender == "Male") {
//         x = "Mr";
//     } else if(theGender=="Female") {
//         x = "Miss";
//     } else {
//         // console.log(`Hello ${theName}`);
//         x=""
//     }
//     return console.log(` Hello ${x} ${theName}`);
// }
// sayHello("amal","Female")





// function calc(num1=0, num2=0, operation="+") {
//     if (operation == "+") {
//         console.log(num1 + num2);
//     } else if (operation == "-") {
//         console.log(num1 - num2);
//     } else if (operation == "*") {
//         console.log(num1 * num2);
//     } else {
//         console.log(num1);
//     }
// }

// calc(39,4,"*")




// function calculator(firstNum, secondNUm, operation="add") {
//     if (secondNUm == undefined) {
//         console.log("Second Number Not Found");
//     } else {
//         if (operation == "add") console.log(firstNum + secondNUm);
//         else if (operation == "subtract") console.log(firstNum - secondNUm);
//         else if (operation == multiply) console.log(firstNum * secondNUm);

//     }
// }
// calculator(25,20)





// function ageInTime(TheAge) {
//     if (TheAge > 10 && TheAge < 100) {

//         console.log(`your age is => ${TheAge * 12} Months`);
//     } else {
//         console.log(`The Age is out of Range`);
//     }

// }
// ageInTime(25)





// function checkStatus(...data) {
//     var a = 0, b = 0, c = 0;
//     for (i = 0; i < 3; i++){
//         typeof data[i] == "string"
//             ? (a = data[i])
//             : typeof data[i] == "number"
//                 ? (b = data[i])
//                 : data[i] == false
//                     ? (c = "Not availble")
//                     : (c = "availble");
//     }
//     return console.log(`Hello ${a}, Your Age Is ${b}, You Are ${c} For Hire`);
// }
// checkStatus("ahmed", 25, false);






// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`);
//     for (i = startYear; i <= endYear; i++){
//         document.write(`<option value="${i}">${i}</option> `)
//     }
//     document.write(`</select>`);
// }
// createSelectBox(1900,2023)





// document.write(`
//     <form action="/action_page.php">
//     <label for="cars">Choose a car:</label>
//     <select name="cars" id="cars">
//     <option value="volvo">Volvo</option>
//     </select>
//     <br><br>
//     <input type="submit" value="Submit">
//     </form>`
// )






// function multiplyNumbars(...nums) {
//     if (nums.length == 0) {
//         console.log(0);
//         return 0;
//     }
//     var x = 1;
//     for (i = 0; i < nums.length; i++){
//         var y = Math.round(nums[i]);
//         if (typeof nums[i] == "string") continue;
//         else {
//             x *= y;
//         }
//     }
//     console.log(x);
// }
// multiplyNumbars(3.4,2.6);




// let names = (...more) => `String [${more.join("],[")}] => Done`;
// console.log(names("anas","ahmed","ali","mai"));

// let x = (...y) => `${y.join(',')}`;



// let calc = (one, two, ...numbers) => {
//     return -one - two + numbers[0] + numbers[1];
// };
// console.log(calc(10, 20, 50, 60));







// // let myNumbers = [20, 50, 10, 60];
// let cal = (one, two, ...nums)=>{
//     return -one - two + nums[0] + nums[1];
// }
// console.log(cal(10,10,30,70)); //80







// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         var arr = zName.split(" ");
//         return `Hello ${arr[0][0].toUpperCase()}${arr[0].substr(1)} ${arr[1][0].toUpperCase()}.`;
//         // Write Your Code Here
//         // Osama Mohamed => Osama M.
//         // Ahmed ali => Ahmed A.
//     }
//     function ageWithMessage(zAge) {
//         return `Your Age Is ${zAge.trim()}`;
//         // Write Your Code Here
//         // 38 Is My Age => Your Age Is 38
//         // 32 Is The Age => Your Age Is 32
//     }
//     function countryTwoLetters(zCountry) {
//         return ` You Live In ${(zCountry[0] + zCountry[1]).toUpperCase()}`;
//         // Write Your Code Here
//         // Egypt => You Live In EG
//         // Syria => You Live In SY
//     }
//     function fullDetails() {
//         return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
//         // Write Your Code Here
//     }
//     return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY




// function itsMe()=> {
//     return `Iam A Normal Function`;
// }

// let itsMe = () => `Iam A Normal Function`;
// console.log(itsMe());




// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         };
//     };
// }
// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// checker = (zName) => { return (status) => { return (salary) => status === "Available" ? `${zName}, My Salary is ${salary}` : `I'm Not Avaialble `; }; };
// console.log(checker("anas")("Available")(4000));
// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble










// function specialMix(...data) {
//     sum = 0;
//     for (i = 0; i <= data.length; i++){
//         let num = parseInt(data[i]);
//         if (isNaN(num))  num = 0;
//         sum += num;
//     }
//     return sum == 0 ? "All Is Strings" : sum;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings



// ===========================================


// // طلع الارقم وعدي علي رقم رقم وهاتهولي مضروب في بعضه
// // Filter Strings Multiply
// let mix = "A13BS2ZX";
// let mixedContent = mix.split("").filter(function (ele) {
//     return !isNaN(parseInt(ele));
// }).map(function (ele) {
//     return ele * ele;
// }).join("");

// console.log(mixedContent);







// let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_S,c,h,o,o,l,2,0,Z";

// let zLetter = myString[myString.length - true];

// let Solutions = myString.split("").map(function (ele) {
//     return ele.replace("_", " ");
// }).filter(function (ele) {
//     return isNaN(parseInt(ele)) && ele != "," && ele != zLetter;
// }).reduce(function (acc, next) {
//     if (acc == next) {
//         return `${acc}`
//     } else {
//         return `${acc}${next}`
//     }
// })
// console.log(Solutions);






// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let answer = mix.splice("").filter(function (ele) {
//     return isNaN(parseInt(ele))
// }).reduce(function (acc, next) {
//     return `${acc}${next}`
// })

// console.log(answer);






// let myString = "EElllzzzzzzzeroo";

// let answer1 = myString.split("").filter(function (letter,index) {
//     return letter !== myString[index +1];
// }).reduce(function (acc, next) {
//     return `${acc}${next}`
// })
// // .reduce((acc, current) => acc + current);

// console.log(answer1);






// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let arr = myArray.splice("").filter((ele) => ele != ",").reduce((acc, next) => `${acc}${next}`)
// console.log(arr);





// let arr = ['E', 'l', 'z', ['e', 'r'], 'o']
// let newArr = []
// arr.toString().split(' ').reduce((acc, curr) => { newArr.push(curr) }, 'E')
// console.log(newArr.toString().replaceAll(',', ''))






// let myArray = ['E', 'l', 'z', ['e', 'r'], 'o']
// let arr = myArray.toString().split("").filter((ele) => ele != ",").reduce((acc, next) => `${acc}${next}`)
// console.log(arr);









// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let arr = numsAndStrings.filter(function (ele) {
//     return typeof(ele) !== "string"
// }).map(function (ele) {
//     return -ele
// })
// console.log(arr);






// let nums = [2, 12, 11, 5, 10, 1, 99];
// let solve = nums.reduce(function (acc, next) {
//     if (next % 2 == 0) {
//         return acc * next
//     } else {
//         return acc * next
//     }
// }, 1)
// console.log(solve);
// // 500



// let nums = [2, 12, 11, 5, 10, 1, 99];
// result = nums.reduce(function (acc, current) {
//     return current % 2 == 0 ? acc * current : acc + current;
// }, 1);
// console.log(result);
// // 500




// let member = {
//     name: "Anas",
//     age: 30,
//     country: "Egypt",
//     fullDetails: function () {
// return `hello${this.name}`
//     }
// }
// console.log(`My name is ${member.name}, My age is ${member.age}, I Live in ${member.country}`);








// // Method One
// // Create Your Object Here
// let objMethodOne = {
//     name: "Anas",
//     age: 30,
//     country: "Egypt",
//     fullDetails: function () {
//     }
// }
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here
// let objMethodTwo = new Object({
//     name: "ahmed",
//     age: 55,
// })
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
// let objMethodThree = {};
// objMethodThree.firstName = "anas";
// objMethodThree.age = 20;
// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.assign({},)
// console.log(objMethodFour.property); // "Method Four"









// let a = 1;

// let threeNums = {
//     b: 2,
//     c: 3,
//     d: 4,
// };

// let twoNums = {
//     e: 5,
//     f: 6,
// };

// // Create Your Object Here in One Line
// let finalObject = Object.assign({}, { a }, threeNums, twoNums);
// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */









// // The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//         publisher: "NIS America",
//         price: 40,
//     },
//     "Titan Quest": {
//         publisher: "THQ",
//         bestThree: {
//             one: "Immortal Throne",
//             two: "Ragnarök",
//             three: "Atlantis",
//         },
//         price: 50,
//     },
//     YS: {
//         publisher: "Falcom",
//         bestThree: {
//             one: "Oath in Felghana",
//             two: "Ark Of Napishtim",
//             three: "origin",
//         },
//         price: 40,
//     },
// };
// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;
// // console.log(objectLength);

// for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${Object.keys(myFavGames)[i] }`);
//     console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}`);
//     console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);

//     // Check If Nested Object Has Property (bestThree)
//     if (Object.values(myFavGames)[i]["bestThree"]) {
//         console.log("- Game Has Releases");
//         console.log(`First => ${Object.values(myFavGames)[i]["bestThree"]["one"]}`);
//         console.log(`Second => ${Object.values(myFavGames)[i]["bestThree"]["two"]}`);
//         console.log(`Third => ${Object.values(myFavGames)[i]["bestThree"]["three"]}`);
//     }

//     console.log("#".repeat(20));
// }







// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myP = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Discription ");

// // Add Heading Text
// myHeading.appendChild(myHeadingText);
// // Add Heading To Main Element
// myMainElement.appendChild(myHeading);

// myP.appendChild(myParagraphText)
// myMainElement.appendChild(myP)

// myMainElement.className = "product";

// document.body.appendChild(myMainElement)


// for (i = 0; i <= 100; i++){
//     document.write(`${myMainElement.innerHTML}`)
// }






// let myElement1 = document.getElementById("elzero");
// let myElement2 = document.getElementsByTagName("div")[0];
// let myElement3 = document.getElementsByClassName("element")[0];
// let myElement4 = document.getElementsByTagNameNS("*", "div")[0];
// let myElement5 = document.querySelector("div");
// let myElement6 = document.querySelector(".element");
// let myElement7 = document.querySelector("#elzero");
// let myElement8 = document.querySelector('[name="js"]');
// let myElement9 = document.querySelectorAll("div")[0];
// let myElement10 = document.querySelectorAll(".element")[0];
// let myElement11 = document.querySelectorAll("#elzero")[0];
// let myElement12 = document.querySelectorAll('[name="js"]')[0];
// let myElement13 = document.body.children[0];
// let myElement14 = document.body.firstElementChild;
// let myElement15 = document.body.childNodes[1];







// let images = document.getElementsByTagName("img");
// for (i = 0; i < images.length; i++){
//     images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     images[i].alt = "elzero"
// }









// let divElement = document.getElementsByTagName("div")[0];
// let myInput = document.getElementsByTagName("input")[0];
// myInput.oninput = function () {
//     let value = parseFloat(myInput.value);
//     if (myInput.value == "") {
//         divElement.textContent = "{0} USD Dollar = {0} Egyptian Pound";
//     } else {
//         divElement.textContent = `{${value.toFixed(2)}} USD Dollar = ${(
//             value * 15.6
//         ).toFixed(2)} Egyptian Pound`;
//     }
// };






// var inputs = document.getElementsByTagName("input")[0];
// var resultEle = document.querySelector(".result");

// inputs.oninput = function () {
//     inputs.value == "" || inputs.value < 0 ? resultEle.textContent = `{0} USD Dollar = {0} Egyptian Pound` : resultEle.textContent = `{${inputs.value}} USD Dollar = {${(inputs.value * 24.52).toFixed(2)}} Egyptian Pound`;
// }









// let oneDiv = document.querySelector("[title = 'one']");
// let twoDiv = document.querySelector("[title = 'two']");

// oneDiv.setAttribute("class", "one")
// twoDiv.setAttribute("class", "two")
// twoDiv.textContent="Two 2 "








// let srcs = document.querySelectorAll('img');
// for (i = 0; i < srcs.length; i++){
//     // console.log(srcs[i].hasAttribute("alt"));
//     if (srcs[i].alt == "") {
//         srcs[i].alt ="new"
//     } else {
//         srcs[i].alt = "old"
//     }
// }






// var numsOfEle = document.querySelector("[type = 'number']");
// var eleTxt = document.querySelector("[type='text']");
// var options = document.querySelector("select");
// var submitBtn = document.querySelector('[name = "create"]');
// var rel = document.querySelector(".results");

// submitBtn.addEventListener("click", function (e) {
//     e.preventDefault()
//     if (options.value == "Div") {
//         for (i = 0; i < +numsOfEle.value; i++) {
//             var newDiv = document.createElement("div");
//             newDiv.textContent = `${eleTxt.value}`
//             rel.appendChild(newDiv)
//             console.log('anas');
//         }
//     } else {
//         for (i = 0; i < +numsOfEle.value; i++) {
//             var newDiv = document.createElement("section");
//             newDiv.textContent = `${eleTxt.value}`;
//             rel.appendChild(newDiv);
//         }
//     }
// })




// let type = document.querySelector("select");
// let theResult = document.getElementsByClassName("results")[0];
// let number = document.querySelector('[name="elements"]');
// let text = document.querySelector('[name="texts"]');
// document.forms[0].onsubmit = function (event) {
//     event.preventDefault();
//     let div = document.createElement("div");
//     let section = document.createElement("section");
//     let divText = document.createTextNode(text.value);
//     let sectionText = document.createTextNode(text.value);
//     div.setAttribute("class", "box");
//     div.setAttribute("title", "Element");
//     section.setAttribute("class", "box");
//     section.setAttribute("title", "Element");
//     div.appendChild(divText);
//     section.appendChild(sectionText);
//     if (type.value == "Div") {
//         for (let i = 0; i < Number(number.value); i++) {
//             div.setAttribute("id", `id-${i + 1}`);
//             theResult.appendChild(div.cloneNode(true));
//         }
//     } else {
//         for (let i = 0; i < Number(number.value); i++) {
//             section.setAttribute("id", `id-${i + 1}`);
//             theResult.appendChild(section.cloneNode(true));
//         }
//     }
// };






// var answer = window.prompt("Print Number From - To")

// var numbers = answer.split("-")
// var start = Math.min(...numbers)
// var end = Math.max(...numbers)
// for (i = start; i <= end; i++) {
//     console.log(i);
// }



// [102] to[110] asssiment 2

// var closee = document.querySelector("#close")
// var divEle = document.querySelector(".my-div")

// closee.onclick = () => divEle.remove()

// setTimeout(() => {
//     divEle.style.display = "block"
// }, 5000);



// var count = document.querySelector(".count span");
// count.style.cssText ="font-size:500px; text-align:center; wigth:100%"

// var counter = setInterval(() => {
//     count.innerHTML -= 1;
//     if (count.innerHTML === "0") {
//         clearInterval(counter);
//         window.open("https://elzero.org","_blank","width=400,height=400,left=200,top=100")
//     }

// }, 1000);





// var lis = document.querySelectorAll("ul li")
// var exp = document.querySelector(".experiment")

// if (window.localStorage.getItem("color")) {
//     exp.style.backgroundColor = window.localStorage.getItem("color");
//     lis.forEach((li) => {
//         li.classList.remove("active")
//     });
//     document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active")
// }

// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         // console.log(e.currentTarget.dataset.color);
//         lis.forEach((li) => {
//             li.classList.remove("active")
//         })
//         e.currentTarget.classList.add("active")
//         window.localStorage.setItem("color", e.currentTarget.dataset.color)

//         exp.style.backgroundColor = e.currentTarget.dataset.color
//     })
// })



// let letters = ["a", "b", "c", "d", "f"]
// let nums = [1, 2, 3, 4, 5]

// for (i in nums) {
//     console.log(letters[i] + " => " + nums[i]);
// }

// output
// 1=> a
// 2=> b
// 3=> c
// 4=> d
// 5=> f


// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < letters.length; j++) {
//         // console.log(letters[j], '=>' , nums[i++])

//         console.log(j);
//     }
// }


/*
let myFriends = ["anas", "sayed", "ali", ["shady", "amr", ["mohamd", "gamal"]]]

let [ , ,,[a,,[,b]]] = myFriends

console.log(a);
console.log(b);
*/



// let chosen = 1;
// let myFriends = [
//     { title: "Osama", age: 39, available: true, skills: ["Html", "Css"] },
//     { title: "Ahmed", age: 36, available: false, skills: ["Python", "Django"] },
//     { title: "Sayed", age: 31, available: true, skills: ["PHP", "Laravel"] }
// ]

// showDetails(chosen)
// function showDetails(chosen) {
//     let friend = myFriends[chosen - 1 ];
//     let { title: name, age, available, skills: [, skill2] } = friend;
//     console.log(`${name} , ${age} , ${available == true?"available":"not available"} , ${skill2}`);
// }



// Destructuring  [115] to [122] assignment 1
// -----------------------------------------
// let myNumbers = [1, 2, 3, 4, 5];
// let [ a, b, c, d, e ] = myNumbers;
// // Write Your Destructuring Assignment Here

// console.log(a * e); // 5







// Destructuring  [115] to [122] assignment 2
// -------------------------------------------
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let [a,b,c,[d,e,[f,g]]]=mySkills
// // Write Your Destructuring Assignment Here

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel






// Destructuring  [115] to [122] assignment 3
// ------------------------------------------
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// let arr4 = arr1.concat(arr2,arr3)
// console.log(arr4);
// [c, , , b, , ,, a, ] = arr4
// // Play With Arrays To Prepare For Destructuring
// // Write Your Destructuring Assignment Here

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed








// Destructuring  [115] to [122] assignment 4
// ------------------------------------------
// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
// };

// let{ age: a, country: c,working:w,hobbies:[h1,h2,h3] } = member;
// // Write Your Destructuring Assignment Here

// console.log(`My Age Is ${a} And I'm ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming








// // Destructuring  [115] to [122] assignment 5
// // ------------------------------------------
// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//         "Oath In Felghana": ["USA", "Japan"],
//         "Ark Of Napishtim": {
//             US: "20 USD",
//             JAP: "10 USD",
//         },
//         Origin: "30 USD",
//     },
// };
// let { title: t, developer: d, releases: {"Oath In Felghana": o , "Ark Of Napishtim": a , Origin: or } } = game
// let [u, j] = o;
// let { US: u_price, JAP: j_price } = a;

// // Write Your Destructuring Assignment/s Here

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD











// // Destructuring  [115] to [122] assignment 6
// // ------------------------------------------
// let chosen = 1;

// let myFriends = [
//     { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//     { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//     { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// // Write Your Code Here

// showDetails(chosen)
// function showDetails(chosen) {
//     let friend = myFriends[chosen - 1 ];
//     let { title: name, age, available, skills: [, skill2] } = friend;
//     console.log(`${name} , ${age} , ${available == true?"available":"not available"} , ${skill2}`);
// }

// // If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"




// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let check = nums.some(function (e) {
//     console.log("test");
//     return e > 6
// })

// console.log(check);







/*
Map and set + what you learn => challenge Requirements
- you cant use Numbers or True or False
- don't use Array Indexes
- You can't use loop 
- 
*/
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// // console.log(Math.max(...n2)*[...n1,...n2].length); الحل الاول

// console.log(new Set([...n1]).size * new Array(...n1, ...n2).length * Math.min(...n1)); // 210 الحل الثاني




// // Destructuring [123] to [133] assignment 1
// // ------------------------------------------
// let setOfNumbers = new Set().add(10)

// setOfNumbers.add(20).add(setOfNumbers.size)
// console.log(setOfNumbers);
// console.log([...setOfNumbers].slice(2).toString());





// // Destructuring [123] to [133] assignment 2
// // ------------------------------------------
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log([...new Set(myFriends)].sort());


// Needed Output
// (4)['Ahmed', 'Mahmoud', 'Osama', 'Sayed']




// // Destructuring [123] to [133] assignment 3
// // ------------------------------------------

// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };
// let newMap = new Map(Object.entries(myInfo))
// console.log(newMap);
// console.log(newMap.size);
// console.log(newMap.has("role"));

// Needed Output
// Map(3) { 'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt' }
// 3
// true




// // Destructuring [123] to [133] assignment 4
// // ------------------------------------------

// let theNumber = 100020003000;
// console.log([...new Set(theNumber.toString())].filter(function(e){return +e}).join(""));

// console.log([...new Set(theNumber.toString())].filter(function(e){return +e}).join(""));
// Needed Output
// 123




// // Destructuring [123] to [133] assignment 5
// // ------------------------------------------
// let theName = "Elzero";
// 1
// console.log([...theName]);
//2
// console.log(theName.split(""));
//3
// console.log(Object.assign([],theName));
//4
// console.log(Array.from(theName));
//5
// let arr = []
// console.log(for(i in theName){arr.push(i)});

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']




// // Destructuring [123] to [133] assignment 6
// // ------------------------------------------
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = [10, 15, 6, "A", "B", "C", "D", "E"];
// let chars = ["A", "B", "C", "A", "B", "C", "D", "E"];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];


// let numbers = chars.filter((e) => typeof e === "number")
// let strings = chars.filter((e)=>typeof e === "string")
// let newArr = [...numbers,...strings]
// console.log(newArr.copyWithin(0,numbers.length,numbers.length*2));

// filter all numbers
// put numbers in first of array
// replace from first array and muliblay length of array * 2
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']




// // Destructuring [123] to [133] assignment 7
// // ------------------------------------------

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// //1 
{
    // console.log([...numsOne, ...numsTwo]);
}
// // 2  - for loop
// {
//     let merge = (first, second) => {
//         for (i = 0; i < second.length; i++){
//             first.push(second[i]);
//         }
//         return first;
//     }
//     var merged= merge(numsOne, numsTwo)
//     console.log(merged);
// }
//3 concat
// {
//     console.log([].concat(numsOne,numsTwo));
// }

//4 - reduce
// {
//     let merged = numsTwo.reduce((arr, item) => {
//         numsOne.push(item);
//         return arr;
//     }, numsOne)
//     console.log(merged);
// }

// Needed Output
// [1, 2, 3, 4, 5, 6]





// // // Destructuring [123] to [133] assignment 8
// // // -----------------------------------------
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// let newArr =
//     console.log(([...n1, ...n2]).length * Math.max(...n1));


// // Needed Output
// // 210



/*
let myString = "Hello Elzero Web School I Love elzero";
// i => case-insensitive غير حساسة
// g => globle كل ما يتوافر ع ليه الشرط 
let regex = /elzero/i
console.log(myString.match(regex));

let regexx = /elzero/ig
console.log(myString.match(regexx));

let valid = /\w@/g;
*/

// let mails =  "o@nn.sa osama@gmail.com elzero@gmail.com osama@mail.ru anas@mail.net";
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 0350 00";
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));


// let serials = "s100s s3eeos s3000s S50000S s950000s";

// console.log(serials.match(/s\d{3}s/ig));
// console.log(serials.match(/s\d{4,5}s/ig));
// console.log(serials.match(/s\d{4,}s/ig));






// // // Destructuring [134] to [146] assignment 1
// // // -----------------------------------------
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// console.log(ip.match(/(\w+\d+:){7}(\d+)/ig));




// Destructuring [134] to [146] assignment 2
// -----------------------------------------
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// console.log(specialNames.match(/os\d*o/ig));
// Output
// ['Os10O', 'OsO', 'Os100O']





// Destructuring [134] to [146] assignment 3
// -----------------------------------------
// let phone = "+(995)-123 (4567)";
// console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig));



// Destructuring [134] to [146] assignment 4
// -----------------------------------------
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// \w+ - any word [1 or more]
// i - case insensitive
// \/ - escape
// s? - optional
// ?: - non-capturing group
// [-\w] - any character except whitespace
// \. - period
// .* - any character [0 or more]




// // // // Destructuring [134] to [146] assignment 5
// // // // -----------------------------------------
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}\/?\s?\-?\s?\d{2}\/?\s?\-?\s?\d{2,4}/ig //Write Pattern Here

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"




// // // // Destructuring [134] to [146] assignment 6
// // // // -----------------------------------------
// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics.'

// let re = /(https?:\/\/)?(www.)?\w+.\w+(:?\d+\/\w+.?\w+.?\w+=?\d+\&?\w+=?\w+)?/ig;
// let rex =/(https?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\?\w+\=\d+\&\w+\=\w+)?/ig;

// // let re = /(https?:\/\/)?(www.)?elzero.org(:?\d+\/\w+\.\w+\?id=\d+&cat=\w+)?/gi;

// console.log(url1.match(rex));
// console.log(url2.match(rex));
// console.log(url3.match(rex));
// console.log(url4.match(rex));
// console.log(url5.match(rex));






// class car {
//     constructor(color, price, company) {
//         this.color = color;
//         this.price = price;
//         this.company = company;

//     }
// }

// let car1 = new car("red", 2000, "fiyat");
// let car2 = new car("blue",5000,"toyta")
// console.log(car1.color);
// console.log(car1.company);




// Destructuring [147] to [158] assignment 1
// -----------------------------------------
// class car {
//     constructor(name, model, price) {
//         this.n = name;
//         this.m = model;
//         this.p = price;
//     }
//     run() {
//         return `car is Running Now `
//     }
//     stop() {
//         return `car is stopped `
//     }
// }

// let car1 = new car("MG", 2022, 50000);
// let car2 = new car("Gelly", 2015, 80000)
// let car3 = new car("fyate", 2016, 20000);

// console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
// console.log(car1.run());

// // Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"




// Destructuring [147] to [158] assignment 2
// -----------------------------------------
// class Phone {
//     constructor(name, serial, price) {
//         this.name = name;
//         this.serial = serial;
//         this.price = price;
//     }
// }

// class Tablet extends Phone{
//     constructor(name, serial, price, size) {
//         super(name, serial, price);
//         this.size = size || "Unknown";
//     }
//     fullDetails() {
//         return `${this.name} Serial is ${this.serial} and Size is ${this.size}`
//     }
// }

// // Write Tablet Class Here

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown



// Destructuring [147] to [158] assignment 3
// -----------------------------------------
// Edit The Class
// class User {
//     #c;
//     constructor(username, card) {
//         this.u = username;
//         this.#c = card;
//     }
//     transform() {
//         let credit = this.#c;
//         credit = typeof credit == "string" ? credit : credit.toString();
//         let creditRe = /\d{4}/g
//         let result = credit.match(creditRe);

//         result = result.map(function (e, index) {
//             return index < result.length - 1 ? e + "-" : e;
//         });

//         result = result.join("");
//         return result;

//     }
//     showData() {
//         return `Hello ${this.u} Your Credit Card Number is ${this.transform()}`
//     }
// }

// // Do Not Edit Anything Below

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData());
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData());
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData());
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined



// Destructuring [147] to [158] assignment 4
// -----------------------------------------
// Write Your Code Here


// // Do Not Edit Below
// let myStr = "Elzero";
// String.prototype.addLove = function () {
//     return `I love ${myStr} Web School `
// }
// console.log(myStr.addLove()); // I Love Elzero Web School









// Destructuring [147] to [158] assignment 5
// // -----------------------------------------
// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };

// // Write Your Code Here
// Object.defineProperties(myObj, {
//     id: { enumerable: false },
//     score: { writable: false },
// });
// delete myObj.country;

// myObj.score = 500 + 500;

// for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

// // Needed Output

// // "username => Elzero"
// // "score => 1000"

// // { username: 'Elzero', score: 1000, id: 100 }





// let old = performance.now()
// let x;
// let y;

// for (i = 0; i < 10000000; i++){
//     for (x = 1; x < 14; x++){
//         y = 14 - x;
//         if ((x * x) + (y * y) == 100)
//             break;
//     }
// }
// console.log(x, y);
// let neww = performance.new()

// console.log(neww - old);





// Destructuring [159] to [168] assignment 1
// // -----------------------------------------
// let dateNow = new Date();
// let anasBirthday = new Date("mar 30, 93")
// let age = dateNow - anasBirthday;

// // console.log(age / 1000 / 60 / 60 / 24 / 30 / 12);
// let ageInSec = age / 1000;
// console.log(`${parseInt(ageInSec)} => Seconds`);

// let ageInMin = ageInSec / 60;
// console.log(`${parseInt(ageInMin)} => Minutes`);

// let ageInHours = ageInMin / 60;
// console.log(`${parseInt(ageInHours)} => Hours`);

// let ageInDays = ageInHours / 24;
// console.log(`${parseInt(ageInDays)} => Days`);

// let ageInMonths = ageInDays / 30;
// console.log(`${parseInt(ageInMonths)} => Months`);

// let ageInYears = ageInMonths / 12;
// console.log(`${parseInt(ageInYears)} => Years`);




// Destructuring [159] to [168] assignment 2
// // --------------------------------------

// let dateAfter10Years = new Date(0);
// dateAfter10Years.setFullYear(1980)
// dateAfter10Years.setHours(0);
// dateAfter10Years.setSeconds(1)
// console.log(dateAfter10Years);



// Destructuring [159] to [168] assignment 3
// // --------------------------------------
// let date = new Date();
// date.setDate(0);
// console.log(date);
// console.log(`Previous Month Is April And Last Day Is ${date.getDate()}`);




// Destructuring [159] to [168] assignment 4
// // --------------------------------------
// // way 1
// let myBirthDate1 = new Date("03-20-1993");
// console.log(myBirthDate1);

// // way 2
// let myBirthDate2 = new Date(1993, 02, 20);
// console.log(myBirthDate2);

// // way 3
// let myBirthDate3 = new Date();
// myBirthDate3.setFullYear(1993, 2, 20);
// myBirthDate3.setHours(0, 0, 0, 0);
// console.log(myBirthDate3);


// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"




// Destructuring [159] to [168] assignment 5
// ------------------------------------------


// let old = performance.now()
// for (i = 0; i < 100000; i++){
//     console.log(i);
// }
// let neww = performance.now()

// console.log(`#`.repeat(20));

// console.log(`Loop Took => ${parseInt( neww - old) }  Milliseconds.`);

// Needed Output

// "Loop Took 1921 Milliseconds."




// Destructuring [159] to [168] assignment 6
// ------------------------------------------ انا مش فاهم السوال دا
// // Write Your Generator Function Here
// function* gen() {
//     yield 14;
//     yield 140 + 14;
//     yield 140 + 14 + 340;
//     let arr = [14, 140, 340];
//     let sumArr;
//     while (true) {
//         arr.push(arr[arr.length - 1] + 200);
//         sumArr = arr.reduce((a, b) => a + b);
//         yield sumArr;
//     }
// }


// let generator = gen();
// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}




// Destructuring [159] to [168] assignment 7
// -----------------------------------------
// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here
// function* genAll() {
//     let numbers = genNumbers()
//     numbers = [...new Set(numbers)];
//     let letters = genLetters()
//     letters = [...new Set(letters)];

//     yield* numbers;
//     yield* letters;

// }
// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}



// Destructuring [159] to [168] assignment 8
// -----------------------------------------

// mod-tow.js
// let a = 10;
// let b = 20;
// let c = 30;
// export { a as numOne, b as numTwo, c as numThree };

// // mod-one.js
// import { numOne, numTwo, numThree } from "./mod-two.js";
// export { numOne, numTwo, numThree };
// export default function (one, two, three) {
//     return numOne + numTwo + numThree;
// }

// // main.js
// import calc, * as modOne from "./mod-one.js";
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60




// function one() {
//     console.log("one");

// }
// function two() {
//     one();
//     console.log('tow');
// }

// function three() {
//     two();
//     console.log('three');
// }
// one();
// console.log('###############');
// two()
// console.log('###############');
// three()
// console.log('###############');




// let num = 120;
// console.log(num); // 120
// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true




// Destructuring [169] to [178] assignment 1
// -----------------------------------------

// [
//     {
//         "id": 1,
//         "name": "Ahmed",
//         "category": "blog",
//         "title": "JavaScript: The Good Parts",
//         "artical": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia "
//     },
//     {
//         "id": 2,
//         "name": "Ahmed",
//         "category": "blog",
//         "title": "JavaScript: The Good Parts",
//         "artical": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia "
//     },
//     {
//         "id": 3,
//         "name": "Ahmed",
//         "category": "blog",
//         "title": "JavaScript: The Good Parts",
//         "artical": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia "
//     },
//     {
//         "id": 4,
//         "name": "Ahmed",
//         "category": "blog",
//         "title": "JavaScript: The Good Parts",
//         "artical": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia "
//     },
//     {
//         "id": 5,
//         "name": "Ahmed",
//         "category": "blog",
//         "title": "JavaScript: The Good Parts",
//         "artical": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia "
//     },
//     {
//         "id": 6,
//         "name": "Ahmed",
//         "category": "blog",
//         "title": "JavaScript: The Good Parts",
//         "artical": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia "
//     }
// ]





// // Destructuring [169] to [178] assignment 2
// // -----------------------------------------

// let req = new XMLHttpRequest();
// req.open("get", "articles.json", true);
// req.send();


// req.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(this.responseText);
//         console.log("JSON Object Content Here");
//     }
// }
// // Destructuring [169] to [178] assignment 3
// // -----------------------------------------
// // mainData Variable Content
// req.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         let stringJson = this.responseText;
//         console.log(stringJson);

//         console.log("#".repeat(20));
//         let objectjson = JSON.parse(this.responseText)
//         console.log(objectjson);
//         console.log("JSON Object Content Here");

//         // Destructuring [169] to [178] assignment 4
//         // -----------------------------------------
//         for (i in objectjson) {
//             document.write(`
//             <div>
//                 <h2>${objectjson[i].title}</h2>
//                 <p>${objectjson[i].artical}</p>
//                 <p>Author : ${objectjson[i].author}</p>
//                 <p>Category :  ${objectjson[i].category}</p>
//             </div>
//             `)
//             document.write(`=`.repeat(20))
//         }

//     }
// }

// // UpdatedData Variable Content
// // "JSON Object Content Here"







// Destructuring [179] to [188] assignment 1
// -----------------------------------------
// let myPromis = new Promise((res, rej) => {
//     let req = new XMLHttpRequest();
//     req.open("get", "https://restcountries.com/v3.1/all");
//     req.send();
//     req.onload = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             // console.log(JSON.parse(req.response));
//             res(req.response)
//         } else {
//             // console.log("not Found");
//             rej(Error("Not Found"));
//         }
//     }
// }).then((result => {
//     let myDate = JSON.parse(result);
//     return myDate;
// })).then((data) => {
//     console.table(data);
//     for (i in data) {
//         document.write(`<div>`)
//         document.write(`
//             <div>
//                 <h3>${data[i].title}</h3>
//                 <p>${data[i].description}</p>
//             </div>
//         `)
//         document.write(`</div>`)
//         document.write("= ".repeat(20))
//     // }
// });







// Destructuring [179] to [188] assignment 2
// -----------------------------------------
// fetch("jsonObject.json").then((data) => {
//     // console.log(data.json());
//     return data.json()
    
// }).then((data) => {
//         for (i in data) {
//         document.write(`<div>`)
//         document.write(`
//             <div>
//                 <h3>${data[i].title}</h3>
//                 <p>${data[i].description}</p>
//             </div>
//         `)
//         document.write(`</div>`)
//         document.write("= * ".repeat(10))
//     }

// })









// fetch("https://restcountries.com/v3.1/all")
//     .then((data) => {
//     console.log(data.json());
//     return data
    
// }).then((data) => {
//     return data
// }).then((data) => {
//     console.log(data);
// })









let myPromis = new Promise((res, rej) => {
    let req = new XMLHttpRequest();
    req.open("get", "jsonObject.json");
    req.send();
    req.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            // console.log(JSON.parse(req.response));
            res(req.response)
        } else {
            // console.log("not Found");
            rej(Error("Not Found"));
        }
    }
}).then((result => {
    let myDate = JSON.parse(result);
    return myDate;
})).then((data) => {
    console.table(data);
    for (i in data) {
        document.write(`<div>`)
        document.write(`
            <div>
                <h3>${data[i].title}</h3>
                <p>${data[i].description}</p>
            </div>
        `)
        document.write(`</div>`)
        document.write("= ".repeat(20))
    }
});
