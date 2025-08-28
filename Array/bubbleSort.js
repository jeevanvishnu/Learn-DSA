function bubbleSort(arr){

    let n = arr.length - 1
    let swapped 

    for(let i = 0 ; i<n-1 ;i++){
        swapped = false

        for(let j = 0 ; j < n - i - 1 ; j++){
            if(arr[j] > arr[j+1]){
           
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
           swapped = true
            }
        }
        
            if(!swapped) break
    }

    return arr

}

let array = [5,1,4,2,8]
console.log(bubbleSort(array));
 