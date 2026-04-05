let arr=[11,23,45,2];
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
let filter_arr = arr.filter(function(val){
    if (val % 2 == 1) return true;
})

// REDUCE - when you want result as a single value from arr
// arr.reduce(function(accumulator, val){
//     return accumulator + val;
// },0);   

//find - find fisrt element which satisfy the condition 
arr.find

// some - return true if any element satify the condition

//every - check all elements pass the condition

let keyy ="role";

let student ={
    name :"shifa",
    age:23,
    isEnrolled : true,
    key: "adf",
    location : {
     city : "akola",
     pincode : 411001
    }   ,
    [role]:"admin"
};
let stud2 = JSON.parse(JSON.stringify(student));
let key ="age";

let {"name" : name} =student;


Object.entries(student).forEach((val) =>{
    console.log(val[0] + ":"+ val[1]);
});
