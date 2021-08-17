//AlgoExpert Easy
//Given two arrays of positive integers representing speeds and an input 'fastest', return the max speed if fastest = true (sum of all pairs) or the minimum speed when fastest = false.
    //Each item in the array must be paired with another from the other array
    //The larger number in a pair is the representative speed of the tandem bicycle

//create sum variable
//sort red shirts in ascending order
//if fastest is true, sort blue in descending order
	//loop through both; if blue is > red, add blue; otherwise, add red
//if fastest is false, sort blue in ascending to pair slowest w/ slowest and fastest w/ fastest
	//loop through both, the largest number HAS to be added to the sum so if blue > red, add blue; otherwise add red
    function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
        let sum = 0;
        redShirtSpeeds.sort((a, b) => a - b);
            if (fastest === true){
                blueShirtSpeeds.sort((a, b) => b - a);
                for (let i = 0; i < redShirtSpeeds.length; i++){
                    if (blueShirtSpeeds[i] > redShirtSpeeds[i]){
                        sum += blueShirtSpeeds[i];
                    } else {
                        sum += redShirtSpeeds[i];
                    }
                }
            } else {
                blueShirtSpeeds.sort((a, b) => a - b);
                for (let i = 0; i < redShirtSpeeds.length; i++){
                    if (blueShirtSpeeds[i] > redShirtSpeeds[i]){
                        sum += blueShirtSpeeds[i];
                    } else {
                        sum += redShirtSpeeds[i];
                    }
                }
            }
        return sum;
    }

//sample input: {
//   "redShirtSpeeds": [5, 5, 3, 9, 2],
//   "blueShirtSpeeds": [3, 6, 7, 2, 1],
//   "fastest": true
// }
//expected output: 32