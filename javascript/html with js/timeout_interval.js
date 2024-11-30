(()=>{let count = 0;
    let counting=100;
    console.log("Start");
    console.log(count++);
    let timerid=setTimeout(()=>console.log(count++),5000)
    console.log("end");
    // clearTimeout(timerid);
   

   let intervatimeoutid = setInterval(()=>console.log(counting++),1000);
   setTimeout(()=>clearInterval(intervatimeoutid),10000);

})();

