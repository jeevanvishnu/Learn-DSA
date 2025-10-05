function count (arr){
    let even = 0 , odd = 0
    for(let i = 0  ; i<arr.length ; i++){
        if(arr[i] % 2 == 0){
            even ++
        }else{
            odd++
        }
    }
    return {even , odd}
}

console.log(count([1, 2, 3, 4, 5]));


