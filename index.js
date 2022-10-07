//1. Ways to print in Javascript
//console.log("Hello world");
// alert("Me");
//  document.write("this is document.write")

//2.     Javascript console API
//console.log("Hello world", 4 + 6, "Another log");
//console.warn("This is a warning")
//console.error("This is an error")

//3. JavaScript Variables
// what is  variables? - containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2)

//4. data types in Javascript
//numbers
var num1 = 455;
var num2 = 56.76;
// console.log(num1 + num2)

//strings
var str1 = "This is a string";
var str2 = "This is also a string";

//objects
var marks = {
    ravi: 34,
    shubham: 87,
    harry: 98.9,

}

// console.log(marks)

//5. booleans
var a = true;
var b = false;
// console.log(a, b);

// var und= undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

//at a very high level, there are two types of data in JS
// 1. primitive data types: undefined, null, no., string, boolean, symbol.
// 2. reference data types: Arrays and objects

var arr = [1, 2, 3, "string", 4, 5]
// console.log(arr)

// operator in JS 
// arthmetic operator

var a = 34;
var b = 66;
// console.log("The value of a+b is ", a+b);

// Assingment Operator
var c = b;
c += 2;
// console.log(c);

// comparison Operator
var x = 34;
var y = 44;
// console.log(x==y)
// console.log(x<=y)

// logical operator
// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// logical not
// console.log(!false);
// console.log(!true);

// function in JS 
function avg(a, b) {
    return (a + b) / 2;
}

// DRY= do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);

// conditionals in JS 
/*
var age = 41;
// single if statement 
if (age> 18) {
    console.log (' you are not a kid');
}

// if/else statement
// if (age> 18) {
//     console.log (' you are not a kid');
// }
// else{
//     console.log (' you are a kid');
// }

age = 25;
// if-else ladder
if (age > 32) {
    console.log("you are not a kid");
}
else if ( age > 26){
    console.log("bache nahi rahe");
}
else if ( age > 22){
    console.log("yes bache nahi rahe");
}
else if ( age > 18){
    console.log(" 18 bache nahi rahe");
}
else {
    console.log("bache rahe");
}


console.log("End of ladder");
*/

// var arr = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12];
// // console.log(arr);
// for(var i=0; i<arr.length; i++) {
//     if (i==4){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function (element) {
// //     console.log(element)
// })
// const a = 0;

// let j = 10;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// let myArr = ["Fan", "Camera", 34, null, true];
// // array methords
// console.log(myArr.length);
// // myArr.pop();
// // myArr.push("ishita")
// // myArr.shift()
// const newLen= myArr.unshift("ishita")
// console.log(newLen);
// console.log(myArr);

// string methods in JS 
let myLovelyString = "ishita verma is good girl good good";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,3))
d=myLovelyString.replace("ishita","sita");
// d=d.replace("good","bad");
// console.log(d, myLovelyString)

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());

// DOM manipulation
let elem=document.getElementById('click');
console.log(elem)

let elemClass=document.getElementsByClassName('container');
console.log(elemClass)
// elemClass[0].style.background = "orange"
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold"
tn[0].replaceChild(createdElement2, createdElement)

// selecting using query
sel = document.querySelector('.containor')
console.log(sel)
sel = document.querySelectorAll('.containor')
console.log(sel) 

// Event in JS 
function clicked(){
    console.log('The button was clicked')
}