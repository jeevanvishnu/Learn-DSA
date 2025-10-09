/*
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
*/

// function subArray (arr){
//     let maxArr = 0
//     let n = arr.length
//     for(let i = 0 ; i<n ; i++){
//         let sum = 0
        
//         for(let  j = i ; j< n ; j++){
          
//             sum += arr[j]
//             maxArr = Math.max(maxArr , sum)
//         }

//     }
//     return maxArr
// }

// console.log(subArray([-2,1,-3,4,-1,2,1,-5,4]));

// optimise way



function subArray(arr){

    let sum = 0
    let maxSum = arr[0]
    for(let i = 0 ; i<arr.length ;  i++ ){
        sum = Math.max(arr[i] , sum + arr[i])
        maxSum = Math.max(maxSum , sum)
        
    }
    return maxSum
} 

console.log(subArray([-2,1,-3,4,-1,2,1,-5,4]));