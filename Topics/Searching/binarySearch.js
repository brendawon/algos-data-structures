//DSA Udemy Course

//assign start pointer, end pointer, middle pointer (Math.floor(start + end / 2))
//while arr middle is NOT value, loop through the array
//if < middle, make end = middle-1
//if > middle, make start = middle+1
//make middle = Math.floor((start+end) / 2)
//if arr middle = val, return middle outside of loop
function binarySearch(arr, val){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start+end)/2);
    while (arr[middle] !== val && start <= end){
        if (arr[middle] > val){
            end = middle-1;
        } else if (arr[middle] < val){
            start = middle+1;
        }
        middle = Math.floor((start+end)/2);
    }
    if (arr[middle] === val){
        return middle;
    } else {
        return -1
    }
}