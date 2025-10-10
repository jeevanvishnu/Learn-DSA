
function pointer (arr , k){
    let left = 0
    let right = arr.length-1
    

    while(left < right){
      let sum = arr[left] + arr[right]
        

        if(sum === k){
            return true
        }else if(sum < k){

            left ++

        }else{
            right --
        }
    }
    return false
    
}

console.log(pointer([1, 2, 3, 4, 6],8));
