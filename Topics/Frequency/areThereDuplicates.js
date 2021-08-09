//DSA Udemy Course

//turn arguments into array
//frequency:
    //create obj to store arguments
    //loop through array; if obj[args[i]] exists, return true
    //if it does not exist, add to obj

    function areThereDuplicates() {
        let args = Array.from(arguments);
        let obj = {};
        for (let i = 0; i < args.length; i++){
            if (!obj[args[i]]) obj[args[i]] = true;
            else {
                return true;
            }
        }
        return false;
    }

//sample input: areThereDuplicates(1, 2, 3)
//expected outcome: false