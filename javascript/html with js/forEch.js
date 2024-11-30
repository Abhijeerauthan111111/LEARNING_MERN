// let arr=[21,324,325,5432,42,5432,234];

// //instead for using loops to print the array we use forEach loop or mwthod

// console.log("UNSorted array"+arr.forEach(function(num){
//     console.log(num);
// }));

// arr.sort();

// console.log("Sorted array"+arr.forEach(function(num){
//     console.log(num);
// }));

// arr.push("hello");
// console.log("updated array"+arr.forEach((num,i)=>{
//     if(i===2)return;
//     console.log(num,i);
// }));

let arr=[1,2,3,4,5,6,7,8];
let eve=arr.map((num)=>console.log(num*2));

let filt=arr.filter((num)=>num%2===0);
console.log("Filterd",filt);