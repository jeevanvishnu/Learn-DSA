/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/


// function TwoSum (arr , target){
//     for(let i = 0 ; i<arr.length ; i++){
//         for(let j = i +1 ; j < arr.length ;j++){
//             if(arr[i] + arr[j] === target )
//                 return [i, j]
//         }
//     }
// }

// console.log(TwoSum( [1,3,5,7],8));


// Best approach time complexity is 0(n)
function TwoSum (arr , target){
    let map = new Map()
    for(let i = 0 ; i<arr.length ;  i++){
        let num = arr[i]
        let num1 = target - num
        if(map.has(num1)){
            return [map.get(num1) , i]
        }
        map.set(num , i)
    }
}

console.log(TwoSum([2,7,11,15],9));
