function numSum (n){
    if(n<=9) return n
    let last = n % 10
    n = n/10
    return numSum(Math.floor(n + last))
}

console.log(numSum(234));
