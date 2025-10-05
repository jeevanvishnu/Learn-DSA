function findMissing(num){
    let missing = []
    for(let i = 1 ; i<num.length ; i++){
        if(!num.includes(i)){
            
            missing.push(i)
        }
    }
    return missing
}
console.log(findMissing([1,2,4,5]));
