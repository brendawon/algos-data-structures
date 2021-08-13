//DSA Udemy Course
//given an integer num, add all the numbers between the number and 1 and return

function sumRange(num){
    if (num === 1) {
        return 1;
    }
    return num += sumRange(num-1);
}