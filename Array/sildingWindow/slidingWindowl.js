// function slliding(arr , k){
//     let max = 0
//     for(let i = 0 ; i<=arr.length - k ; i++){
        
//         let sum = 0
//         for(let j = i ; j<i + k ;j++){
//             sum +=arr[j]
//             max = Math.max(max , sum)
//         }
//     }
//     return max
// }

// console.log(slliding([2, 3, 4, 1, 5], 3));


// using sliding window

function sliding (arr , k){
    let max =  0
    let sum = 0

    for(let i = 0 ; i< k ; i++){
        sum += arr[i]
    }
    for(let i = k ; i< arr.length ; i++){
        sum += arr[i] - arr[i-k]
        max = Math.max(max , sum)
    }

    return max
}


console.log(sliding([2, 3, 4, 1, 5], 3));