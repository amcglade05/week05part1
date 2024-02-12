

let example =  (a, b, callB) => {
    //console.log(`\n >> args passed and printedf  ${a}    ${b} `);
    //console.log(`\n >> expressions can run in template literals  ${a+b} `);
    //console.log(`\n >> function sendf called`);
    callB();
    callB(3);
    callB(a + b);
    
    setTimeout(() => {
           return callB(a+b);
        }, 800);
    };

//gets called as callB
let sendf = (finalresult) => {
    console.log(`\n Result:  ${finalresult}`);
    };

example(2, 5, sendf);
let newref= example;
newref(4, 7, sendf);