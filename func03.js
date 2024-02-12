let example = (a, b, callB) => {
    setTimeout(() => {
      callB(a + b);
    }, 200);
  }


  example(2, 5, (finalresult) =>  {
        console.log(` \n Result: ${finalresult} \n`);
    }
  ); 
  