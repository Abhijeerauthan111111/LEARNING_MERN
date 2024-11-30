function objcopy(obj){
    // let objcopy = obj;
    let objstr = JSON.stringify(obj);
    let objcopy = JSON.parse(objstr); 
    return objcopy;
}

let obj={
    a:"21",
    b:"1212",
    c:"87878",

}
console.log("OBJECT",obj);
let obj2= objcopy(obj);
console.log("COPIED OBJECT",obj2);

obj2.a=32;
obj2.d="21221";
console.log("OBJECT",obj);
console.log("COPIED OBJECT",obj2);





