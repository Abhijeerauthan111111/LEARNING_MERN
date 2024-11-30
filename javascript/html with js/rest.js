// // as function parameter
// function sum(...number){
// return number.reduce((acc,curr)=>acc+curr,0);
// }
// console.log(sum(1,2,3,4));


// //as array destructuring

// let array1 = [1,2,3,4,5,60];
// let [arr1,arr2,...rest]=array1;
// console.log(arr1);
// console.log(arr2);
// console.log(rest);

// //object destructuring also

// let obj1 = {
//     a:1,
//     b:2,
//     c:3
// }

// let {a,...obj}=obj1;
// console.log(obj);
// console.log(obj1);
// let obj2={...obj,d:32};     //here used as a rest
// console.log(obj2);

let obj1 = {
    a:1,
    b:2,
    c:3,
    d:2121,
    e:11
}

let{a,e,...rest}=obj1;
