// DSA Udemy Course
//Given two positive integers, find out of the two numbers have the same frequency of digits.

//turn nums to strings
//compare length of str1 and str2; if not equal, return false
//else: loop through str 1 and store as keys in obj, incrementing value or setting equal to 1 if it doesn't exist
//loop through str 2 and decrement by 1 if it exists, return false if it does not exist or is 0
function sameFrequency(num1, num2){
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length === str2.length){
        let obj = {}; 
        for (let i = 0; i < str1.length; i++){
            if (obj[str1[i]]) obj[str1[i]]++;
            else {
                obj[str1[i]] = 1;
            }
        }
        for (let i = 0; i < str2.length; i++){
            if (!obj[str2[i]] || obj[str2[i]] === 0) return false;
            else {
                obj[str2[i]]--;
            }
        }
        return true;
    } else {
        return false;
    }
}

//sample input: sameFrequency(182, 281)
//expected output: true