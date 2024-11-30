let parsestring=(JSONstring)=>{
    try{
       return JSON.parse(JSONstring);
    }
    catch(error){
        console.log("Error occureed")
        console.log(error.message)
        return {};

    }
}

let obj = {
    name:"Abhi",
    class: 4,
    rollno:32
}

let JSONstring=JSON.stringify(obj)
console.log(JSONstring);
let newobj = parsestring(JSONstring);
console.log(newobj);

let newobj2=parsestring("{'name':'Abhi','class':4,'rollno':32}")  //this will show error
// let newobj2=parsestring('{"name":"abhi","class":4,"rollno":32}');  //  this is right code

console.log(newobj2)
console.log("end script");

