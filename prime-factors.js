function primeFactors (num) {
    var factors = [];
    for (var i = 2; i <= num; i++) {
        while(num % i === 0 && num !== 1) {
            factors.push(i);
            num = num/i;
        }
    }
    return factors;
}

module.exports = {
    for : primeFactors
}
