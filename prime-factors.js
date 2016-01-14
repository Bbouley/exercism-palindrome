function primeFactors (num) {
    var input = num;
    var factors = [];
    for (var i = 2; i <= input; i++) {
        while(input % i === 0 && input !== 1) {
            factors.push(i);
            input = input/i;
        }
    }
    return factors;
}

module.exports = {
    for : primeFactors
}


// function everything (string) {
//     var str1 = lowerCase(string);
//     var str2 = removeSpace(str1);
//     var arr1 = convertToArr(str2);
//     var arr2 = reverseArr(arr1);
//     var str3 = joinArr(arr2);
//     if (string === str3) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(everything('racecar'))
// console.log(everything('fuck kcuf'))
// console.log(everything('not a palindrome'))
//
// // *** Helper Functions *** //
//
// function lowerCase (string) {
//     return string.toLowerCase();
// }
//
// function removeSpace (string) {
//     return string.trim();
// }
//
// function convertToArr (string) {
//     return string.split();
// }
//
// function reverseArr (array) {
//     var output = [];
//     for (var i = array.length - 1; i >= 0; i--) {
//         output.push(array[i])
//     }
//     return output;
// }
//
// function joinArr (array) {
//     return array.join('')
// }
