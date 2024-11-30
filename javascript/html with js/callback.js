// callback is a function which are passed as arguments in other functions which is then invoked inside outer function to complete
//callback function
function sayhello(stuname){
console.log(`hello ${stuname} bro`);
}

//function that take callback

function userinput(callbackfunc){
    let stuname= prompt('Please enter your name');
    callbackfunc(stuname);
}

//callback
userinput(sayhello);