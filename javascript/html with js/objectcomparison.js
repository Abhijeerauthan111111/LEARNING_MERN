let user={
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

let user1={
    name:"abhijeet",
    lname:"Rauthan",
    feepaid :true,
    address:{
        state: "Uttarpradesh",
        city: "Vasundhara",
        housenum:4136
    },
    subjects:['math','hindi','physics','chem']
}



let user2={
    name:"aman",
    lname:"mukhes",
    feepaid :false,
    address:{
        state: "Uttarakhand ",
        city: "Maletha",
        housenum:1221
    },
    subjects:['cse','mechanical','sanskrit','tax slab']

}
let user3={
    name:"aman",
    lname:"mukhes",
    feepaid :false,
    address:{
        state: "Uttarakhand ",
        city: "Maletha",
        housenum:1221
    },
    subjects:['cse','mechanical','sanskrit','tax slab']

}


function shallowcopy(obj1,obj2){
//     chechking reference
if(obj1!==obj2){
 return false;
}
 
if(typeof obj1!=='object' || obj1===null||typeof obj2!=='object' || obj2===null){
    return false;
}

let allkeys1 = Object.keys(obj1);
let allkeys2 = Object.keys(obj2);
//chehking number of keys in objects
if(allkeys1.length !== allkeys2.length){
    return false;
}

//checking inside keys

for(let key of allkeys1){
if(allkeys1[key]!==allkeys2[key]){
return false;
}
}
return true;

}


function deepcopy(obj1,obj2){
  //     chechking reference
  // if(obj1===obj2){
  //     return true;
   //    }
    
   if(typeof obj1 !=='object' || obj1===null||typeof obj2 !=='object' || obj2===null){
       return false;
   }
   
   let allkeys1 = Object.keys(obj1);
   let allkeys2 = Object.keys(obj2);
   //chehking number of keys in objects
   if(allkeys1.length !== allkeys2.length){
       return false;
   }
   
   //checking inside keys and inside the keys
   for(let key of allkeys1){
    if(!allkeys2.includes(key)||!deepcopy(obj1[key],obj2[key])){
        return false;
    }

   }
return true;

}

function deepcopy2(obj1, obj2) {
    // If both are the same reference, they are equal
    // if (obj1 === obj2) {
    //     return true;
    // }
    
    // If either is not an object or is null, return direct comparison result
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
   
    let allkeys1 = Object.keys(obj1);
    let allkeys2 = Object.keys(obj2);
    
    // Check number of keys in both objects
    if (allkeys1.length !== allkeys2.length) {
        return false;
    }
    
    // Check each key and its corresponding value
    for (let key of allkeys1) {
        // If key is not in obj2 or the values aren't deeply equal, return false
        if (!allkeys2.includes(key) || !deepcopy(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}


//console.log(shallowcopy(user,user1));
console.log(deepcopy2(user2,user3));
console.log(shallowcopy(user2,user3));

