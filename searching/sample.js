
function search (arr , t){
    let left = 0
    let right = arr.length-1

    while(left <= right){
        let mid = Math.floor(right + left /2)
        console.log(mid);
        
        if(arr[mid] === t) return mid

        if(arr[mid] > t){
            right = mid -1
        }else{
            left = mid +1
        }
    }
    return -1
}

console.log(search([10,20,30,40,50],20));
