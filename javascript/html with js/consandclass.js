// //learning class and constructor

// const user1={
//     name:"Abhi",
//     class: "4th" ,
//     phnum: 12312312,
//     dead : false

// }

// const user2={
//     name:"Dheeraj",
//     class: "5th" ,
//     phnum: 8678672312,
//     dead : true

// }

// const user3={
//     name:"Aman",
//     class: "2nd" ,
//     phnum: 234232312,
//     dead : true

// }

// let isDead=(user)=>{user.dead=true};

// console.log(JSON.stringify(user1))
// console.log(JSON.stringify(user2))
// isDead(user1);
// console.log("Now our hero is dead")
// console.log(JSON.stringify(user1))
// console.log(JSON.stringify(user2))
// console.log(JSON.stringify(user3))

//now for all this we will use constructor
function User(namee,classs,phnum,dead){    //constructor
    this.namee=namee;
    this.class=classs;
    this.phnum=phnum;
    this.dead=dead;

    // this.isDead=function(){
    //    this.dead=true;
    // }

}



User.prototype.isDead=function(){
        this.dead=true;
    };

User.prototype.MiddleName=function(user,surname){
    this.surname=surname;
};

const user1 = new User("abhi","25th",961347273,false);
const user2 = new User("dHEERAJ","235th",932421793,false);
const user3 = new User("aman","9th",96876987, true);
console.log(JSON.stringify(user1));
console.log(JSON.stringify(user2));
console.log(JSON.stringify(user3));
console.log("Our hero is dead now");
user1.isDead();
console.log(JSON.stringify(user1));
console.log(JSON.stringify(user2));
console.log(JSON.stringify(user3));

console.log(user1.MiddleName);