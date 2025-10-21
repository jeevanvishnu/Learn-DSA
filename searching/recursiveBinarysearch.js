function search(arr , t , left , right){
    if(left > right) return -1
    
    let mid = Math.floor((right + left) /2)

    if(arr[mid] === t){
        return mid
    }

    if(arr[mid] < t){
        return search(arr,t,mid+1 , right)

    }else{
        return search(arr , t, left, mid-1)
    }
}


console.log(search([-5,2,4,6,10],6 , 0 , 4));