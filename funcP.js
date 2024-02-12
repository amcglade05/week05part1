
//Sequence Control usin function expressions

//can use function before (some) instead of => if you want
myDisplay = (some) => {
    console.log(some);
};
  
myCal = (num1, num2) =>  {
    setTimeout(() => {
       let sum = num1 + num2;
       return sum;
    }, 2000);
};
  
let res = myCal(2, 5);
myDisplay(`\n >> result of myCal return ${res} \n`);
