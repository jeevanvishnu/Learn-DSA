function selectionSort(arr){
    let n = arr.length

    for(let i = 0 ; i<n-1 ; i++){
        let mixIndex = i

        for(let j = i + 1 ; j<n ; j++){
            
            if(arr[j] < arr[mixIndex]){
                console.log(mixIndex);
                
                mixIndex = j
                
            }
        }

            if(mixIndex !== i){
              
               [arr[i],arr[mixIndex]] = [arr[mixIndex],arr[i]]
            }
        
    }

    return arr

}

console.log(selectionSort([64,25,12,22,11]));
