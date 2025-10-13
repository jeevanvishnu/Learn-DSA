function search (arr , t){
 for(let i = 0 ; i<arr.length ; i++){
    if(arr[i] === t){
        return i
    }
 }
 return -1
}

console.log(search([-5,2,4,6,10],6));