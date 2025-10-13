

// Binary search

function search (arr,t){
 let left = 0
  let right = arr.length-1

  while(left <= right){
    let mid = Math.floor(right + left / 2)
    console.log(mid);
    
    if(arr[mid] === t) return mid
    if(t < arr[mid]){
        right=mid -1
    }else{
        left = mid +1
    }
  }
  return -1
}
console.log(search([-5,2,4,6,10],6));