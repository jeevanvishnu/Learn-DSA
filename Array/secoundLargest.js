let arr = [20 , 1, 2,4,21]

let min = arr[0]
for(let i = 1 ; i<arr.length ; i++){
    if(arr[i] < min){
        min = arr[i]
    }
    
   
}

console.log(min);
