//----------------------------------------
// 1. THE DOM 

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
// 2.setAttribute
// 3.hasAttribute

// let a = document.querySelector("a");
// //a.href="https://www.google.com";
// a.setAttribute("href", "https://www.google.com");

// let img= document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1588776814546-1ffcf47267a5");


let img= document.querySelector("img");
let btn = document.querySelector("button")

let wallpapers =[
    "img/three.png",
    "img/img2.wallspic.com-anime-art-illustration-artist-plant-4096x2304.jpg",
    "img/img3.wallspic.com-tanjiro_kamado-demon_slayer_kimetsu_no_yaiba-zenitsu_agatsuma-anime-train-2732x1536.png",
    "img/inosuke-moon-silhouette-83bkvv5cgvw4cvoa.jpg",
    "img/one punch.png"
];

let randomIndex =0;

btn.addEventListener("click", function(){
    randomIndex =Math.floor(Math.random() * wallpapers.length);
img.src = wallpapers[randomIndex]
});




























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


