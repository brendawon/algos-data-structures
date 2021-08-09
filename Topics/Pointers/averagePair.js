//DSA Udemy Course
//Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target

//double the target to find the sum
//use left and right pointers and add the two 
//if temp > sum, move the right pointer down 
//if temp < sum, move the left pointer up
//if =, return true
//keep going while left pointer < right pointer 
//return false

function averagePair(arr, target){
    if (arr.length > 0){
        let sum = target*2;
        let left = 0;
        let right = arr.length-1;
        while (left < right){
            let temp = arr[left] + arr[right];
            if (temp > sum) {
                right--;
            } else if (temp < sum){
                left++;
            } else {
                return true;
            }
        }
    }
    return false;
}

//sample input: averagePair([1, 2, 3], 2.5)
//expected output: true