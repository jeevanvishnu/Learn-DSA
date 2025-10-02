function count (num){
    let result =0
    while(num > 0 ){
     num = Math.floor(num / 10)
        result ++
   }
    return result
    
}
console.log(count(100))


