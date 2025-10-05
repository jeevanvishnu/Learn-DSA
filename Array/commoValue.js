function common(arr1 , arr2){
    let same = []
    for(let i = 0 ; i<arr1.length ; i++){
       for(let j = 0 ; j<arr2.length ;j++){
        if(arr1[i] === arr2[j]){
            same.push(arr1[i])
        }
       }
    }
    return same
}

console.log(common([1, 2, 3, 4,],[3, 4, 5, 6] ));
