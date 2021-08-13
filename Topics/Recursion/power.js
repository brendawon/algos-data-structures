//DSA Udemy Course
//Given a base and an exponent, return the power of the base exponent

//base case: exp = 0, return 1
//recursively multiple base * power(base, exp-1)
function power(base, exp){
    if (exp === 0){
        return 1;
    }
    return base * power(base, exp-1);
}

//sample input: power(2, 0)
//expected output: 1