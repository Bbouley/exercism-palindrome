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
