function natural (n){
    if(n<=1) return n
    return n + natural(n-1)
}
console.log(natural(2));
