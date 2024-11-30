let user={
    fname:"Abhijeet",
    lname:"sharma",
    age:32,
    email:"afaefaed@sdf",
    hobbies:["asfa","asdas"]
}
console.log(user);
let userJson=JSON.stringify(user);
console.log(typeof userJson , userJson);
console.log();
let newuser=JSON.parse(userJson);
console.log(typeof newuser , newuser);
console.log();

let mystr='{"fname":"Abhijeet","lname":"sharma","age":32,"email":"afaefaed@sdf","hobbies":["asfa","asdas"]}';
let parsestr=JSON.parse(mystr);
console.log(parsestr);

console.log("fname : ",user.fname);
console.log("fname : ",mystr.fname);