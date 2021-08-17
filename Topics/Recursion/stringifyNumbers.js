//DSA Udemy Course
//Convert any numbers in the object to a string

//create newObj to store key:value pairs
//loop through keys in obj
//if obj[key] typeof is an obj AND it is NOT an array, recursive function on that obj[key]
//if obj[key] typeof is a number, newobj[key] = obj[key].toString()
//for all other data types, newObj[key] = to the current obj[key]
function stringifyNumbers(obj){
    let newObj = {};
    for (var key in obj){
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            newObj[key] = stringifyNumbers(obj[key])
        } else if (typeof obj[key] === 'number'){
            newObj[key] = obj[key].toString();
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/