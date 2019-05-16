const op1 = 3;
const op2 = 5;

for (let i = 1; i <= 100; i++) {
    if (i % op1 == 0 && i % op2 == 0) {
        console.log("FizzBuzz");
    } else if (i % op1 == 0) {
        console.log("Fizz");
    } else if (i % op2 ==0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// for(i=1;i<=100;i++) {
//     console.log(((i%op1) ? (i%op2) ? i : 'Buzz' : (i%op2) ? 'Fizz' : 'FizzBuzz' ));
// };