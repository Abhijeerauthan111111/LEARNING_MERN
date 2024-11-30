// function printnum(y){
// if(y==1){
// return 0;
// }

// printnum(y);
// console.log(y);
// y--;

// }

// let y = parseInt(prompt("Enetr a number"));
// printnum(y)

function factorial(y){
if(y==0){
return 1;
}

return y* factorial(y-1);

}
 let y = parseInt(prompt("Enetr a nuber : "));

console.log(factorial(y));