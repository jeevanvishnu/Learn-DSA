function duplicate (arr){
    let unique = new Set()
    
    
    let res = []

    for(let  i =0 ; i<arr.length ; i++){
        if(!unique.has(arr[i])){
            unique.add(arr[i])
        }else{

            res.push(arr[i])
        }
    }
    return res
}


console.log(duplicate([1, 2, 3, 1, 3, 6, 6] ));
