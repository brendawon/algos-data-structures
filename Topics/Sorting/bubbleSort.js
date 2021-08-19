//DSA Udemy Course

//loop through array with i which starts at the length of the array - this is so we only compare the index of j that needs to be compared, and we don't compare already sorted items that are bubbled up at the end of the array
//inner loop j beginning at 0 through i-1
//if arr[j] > arr[j+1], swap the two

function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        for (let j = 0; j < i-1; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}