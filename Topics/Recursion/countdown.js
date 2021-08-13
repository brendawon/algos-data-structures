//DSA Udemy Course

//iterative
// function countdown(num){
//     for (let i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done!");
// }

//recursive
function countdown(num) {
    //basecase
    if (num === 0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countdown(num);
}