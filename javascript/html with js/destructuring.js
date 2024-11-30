//extracting properties from object easily

let student={
    name:"abhijeet",
    lname:"Rauthan",
    feepaid :true,
    address:{
        state: "Uttarakhand ",
        city: "Srinagar",
        housenum:32
    },
    subjects:['math','hindi','physics','chem']
}

function printname(argstudent){
// let fname = student.name;
// let lname = student.lname;
// console.log(`Student name is ${fname+" "+lname}` );
   let {name,lname,address}=argstudent;                         // this is destructuring
   let{state}=address;
   console.log(`state name is : ${state}`);
   console.log(`Student name is ${name+" "+lname}` );
}
// printname(student);

//if the value and the variable name is same thene there is shorthand method to show theme

let price = 392;

let student3={
    name:"abhijeet",
    lname:"Rauthan",
    feepaid :true,
    address:{
        state: "Uttarakhand ",
        city: "Srinagar",
        housenum:32
    },
    subjects:['math','hindi','physics','chem'],
    price  ,                                   // price:price both are same

    // defineFunction : function(){
    //     return `${this.name}`;
    // }
    defineFunction(){
        return `${this.name}`;                 // here also destructuring shorthand use for function
    }
}
let name2 = student3.defineFunction();
console.log(name2);