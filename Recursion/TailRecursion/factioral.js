function factioral (n , k){
    if(n=== 0 || n===1) return k
    return factioral(n-1,k*n) 
}

console.log(factioral(3,1));
