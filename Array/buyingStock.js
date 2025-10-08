/*
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 
*/

// function selling(price){
//     let max = 0
//     for(let i = 0 ; i< price.length ; i++){
//         for(let j = i +1 ; j<price.length ; j++){
//             let profit =price[j] -price[i]
//             max = Math.max(max , profit)
//         }
//     }
//     return max
// }
// console.log(selling([7,6,4,3,1]));


// optimise way 

function selling (price){
    let minVal = Infinity
    
    let maxVal = 0
    for(let i = 0 ; i<price.length ;i++){
         minVal = Math.min(minVal , price[i])
         
        let profit = price[i] - minVal
        
         maxVal = Math.max(maxVal,profit)
    }
    return maxVal
}

console.log(selling([7,1,5,3,6,4]));