const countInteger = (x) =>{
    let res = 0

    while(x > 0){
        console.log(x);
        
        x = Math.floor(x/10)
        console.log(x);
        
        
        res++
    }
    return res
 }

 console.log(countInteger(121));
 