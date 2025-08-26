// function maxSubstring (arr,k){
//    let max = 0

//    for(let i = 0 ; i<arr.length-k; i++){
//     let sum = 0

//     for(let j = i ; j<i+k; j++){
//         sum += arr[j]
//     }
//     max = Math.max(max,sum)
//    }
//    return max
// }

// let array = [2,1,5,1,3,2]
// console.log(maxSubstring(array,3));


// ? Sliding window 

function maxSubstring (arr, k){
    let window = 0
    let maxSum = 0 
    for(let i = 0 ; i< k ;i++){
        window += arr[i]
    }
    maxSum = window
    for (let i = k ; i<arr.length ; i++){
        window += arr[i] - arr[i-k]
        
        
        maxSum = Math.max(maxSum,window)
    }
    return maxSum

}

let array = [2,1,5,1,3,2]
console.log(maxSubstring(array,3));
