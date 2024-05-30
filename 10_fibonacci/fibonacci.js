const fibonacci = function(n) {
    Fibonacci = [0,1]
    if (n<0){return "OOPS"}
    if (n==0){return 0}
    if (n==1){return 1}
    for (let i=2; i<=n; i++){
        let digit = Fibonacci[i-2]+Fibonacci[i-1];
        Fibonacci.push(digit);
    }
    return Fibonacci.at(-1)
};

// Do not edit below this line
module.exports = fibonacci;
