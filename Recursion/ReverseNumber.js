function rev (n){
    if(n=== 0) return n
    console.log(n);
    
    return rev(n-1)
}

rev(3)