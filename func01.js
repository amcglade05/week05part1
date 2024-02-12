

let example =  (a, b, callB) => {
    console.log(`\n >> args passed and printedf:  ${a} ${b} `);
    console.log(`\n >> template literals expression:  ${a+b} `);
    console.log(`\n ${callB} \n`);
    };

let sendf = (finalresult) => {
    console.log(`Result:  ${finalresult}`);
    };

example(2, 5, sendf);