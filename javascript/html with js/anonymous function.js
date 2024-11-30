let add = function(){
    console.log("This is anonymous");
}

// console.log(add(2,3));
add();
setTimeout(add,3000);

setTimeout(function() {
    console.log("This is also anonymous but here it is passed directly inside so only this function can call this function");
}, 2000);