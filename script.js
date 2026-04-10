// ##############################################################
//-----------------DOM  ---------------------------------
//##############################################################


// document.querySelector
// document.getElementById
// document.getElementsByClassName  


// let head = document.getElementById("abcd");
// console.log(head);

//-------------------------manipulating text ----------------------
//  let h1 = document.querySelector("h1");
//  console.dir(h1);
//  h1.setAttribute("style", "color:pink");
// h1.innerText ="hello 2";
// h1.textContent="hello 3";
// h1.innerHTML ="hello ! shifa";

///-------------------------Attribute manipulation-----------------------
// 1.getAttribute
//let a= document.querySelector("a");
//console.log(a.getAttribute("href"));

// 2.setAttribute
// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");

// 3.removeAttribute
// let a = document.querySelector("a");
//a.removeAttribute("href")

//----------------------------------DYNAMIC DOM MANIPULATION-------------------------
// 1.createElement

// let h1 =document.createElement("h1");
// h1.textContent ="Hello jii!";
// //document.querySelector("body").appendChild(h1); // methid 1      
// document.body.appendChild(h1); // after script 
// document.body.prepend(h1); // before script

// 2.appendChild
// 3.removeChild
// 4.prepend

//--------------Style in js--------------------------
// 1. h1.classList.add(classname)
// 2.h1.classList.toggle(classnaem)

// ##############################################################
//-----------------Event Handling in js ---------------------------------
//##############################################################

// 1. select the paragraph first 
// 2.relaize what action to perferm 
// 3.add event listener to the paragraph 

// let input = document.querySelector("input");
// input.addEventListener("input",function(dat){
//    console.log(dat.data);

// });

// let select = document.querySelector("select");
// let h1 = document.querySelector("h1");

// select.addEventListener("change",function(details){
//     h1.textContent = ` Device Selected:${details.target.value}`;                         
// })

// let head = document.querySelector("h1");

// window.addEventListener("keydown", function(event) {
//     if(event.key === " "){
//         head.textContent="Space";
//     }else{
//       head.textContent=event.key;
// }

// });


 










// ##############################################################
//-----------------BASIC JS ---------------------------------
//##############################################################

//let arr=[11,23,45,2];
// arr.sort(function(a,b){
//     return b-a;
// })   

// for each
// arr.forEach(function(val){
//     console.log(val);
// });

//map  - jab apko ek new array create karna hoga form previous arr . use map

// let newarr = arr.map(function(val){
//     return val+1;              
// })

// FILTER
// let filter_arr = arr.filter(function(val){
//     if (val % 2 == 1) return true;
// })

// REDUCE - when you want result as a single value from arr
// arr.reduce(function(accumulator, val){
//     return accumulator + val;
// },0);   

//find - find fisrt element which satisfy the condition 

// some - return true if any element satify the condition

//every - check all elements pass the condition

// let keyy ="role";

// let student ={
//     name :"shifa",
//     age:23,
//     isEnrolled : true,
//     key: "adf",
//     location : {
//      city : "akola",
//      pincode : 411001
//     }   ,
//     [role]:"admin"
// };
// let stud2 = JSON.parse(JSON.stringify(student));
// let key ="age";

// let {"name" : name} =student;


// Object.entries(student).forEach((val) =>{
//     console.log(val[0] + ":"+ val[1]);
// });


