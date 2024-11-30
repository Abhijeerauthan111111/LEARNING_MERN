console.log("Promisies working");

let promise = new Promise((resolve,reject)=>{
    if(result()){
      resolve('Success');
    }
    else{
     reject('Eror');
    }
})

promise.then(value=>{
    console.log(value);
})
promise.catch(error=>{
    console.log(error);
})
promise.finally(()=>{
    console.log("Opetation completed");
})
