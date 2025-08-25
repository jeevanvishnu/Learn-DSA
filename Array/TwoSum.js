// function Sum(arr , target){
//     let size = arr.length
//     for(let i = 0 ; i<size ; i++){
//         for(let j = i +1 ; j<size; j++){
//            if(arr[i] + arr[j] === target){
//             return [i , j]
//            }else{
//             return []
//            }
//         }
//     }
// }

// let arr = [2,7,11,5]

// console.log(Sum(arr,9));


// Good Approach 

function sum(nums , target){
    let map = new Map()
    for(let i = 0 ;i<nums.length ; i++){
      let complement = target - nums[i]
      
      if(map.has(complement)) {
        
        return [map.get(complement),i]
      }
      map.set(nums[i],i)
    }
}
 let arr = [2,7,11,5]
console.log(sum(arr,9));

