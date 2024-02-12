let example = (a, b, callB) => {
    
    setTimeout(() => {
      let res = a + b;
      return callB(res, "completed");
    }, 200);

   
    //done = "true";
    //return done;
    //console.log(`\n ${callB} \n`);
  }


  example(2, 5, (finalresult, done)=>  {
        console.log(` \n Result: ${finalresult} \n`);
        console.log(` \n ${done} \n`);
    }
  ); 
  