//DSA Udemy Course

//iterative
// function factorial(num){
//     let prod = 1;
//     for (let i = num; i > 0; i--){
//         prod *= i;
//     }
//     return prod;
// }

//recursive
function factorial(num){
    if (num === 1){
        return 1;
    }
    return num*=(factorial(num-1));
}