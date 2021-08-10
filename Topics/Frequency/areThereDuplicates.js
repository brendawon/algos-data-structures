//DSA Udemy Course
//Implement a function which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in.

//turn arguments into array
//frequency:
    //create obj to store arguments
    //loop through array; if obj[args[i]] exists, return true
    //if it does not exist, add to obj

    function areThereDuplicates(...args) {
        console.log(args);
        //spread syntax seems to work
        let obj = {};
        for (let i = 0; i < args.length; i++){
            if (!obj[args[i]]) obj[args[i]] = true;
            else {
                return true;
            }
        }
        return false;
    }

//pointers: 
    //sort arguments
    //first pointer = 0, next pointer = 1
    //loop until the next pointer < args.length
    //return true if first and next are equal
    //increment both pointers
    //outside loop return false

// function areThereDuplicates(...args){
//     args.sort();
//     let first = 0;
//     let next = 1;
//     while (next < args.length){
//         if (args[first] === args[next]) {
//             return true;
//         }
//         first++;
//         next++;
//     }
//     return false;
// }

//using Set, which only stores unique keys
//if size of Set = argument length, that means there are no duplicates; if they are not equal, that means there are duplicates
//returns true when Set.size is not equal to argument length
function areThereDuplicates(){
    return new Set(arguments).size !== arguments.length;
}

//sample input: areThereDuplicates(1, 2, 3)
//expected outcome: false