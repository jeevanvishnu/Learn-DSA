function binarySearch(arr,t){
    let left = 0
    let right = arr.length - 1
    let mid

    while(left <= right){
        mid = Math.floor((left + right)/2)
        

        if(arr[mid] === t) {
            return mid
        }else if(arr[mid] < t){
            left = mid +1
        }else{
            right = mid-1
        }
        
    }
    return -1
}

let array = [1,3,5,7,9,11,15]
console.log(binarySearch(array,9));
