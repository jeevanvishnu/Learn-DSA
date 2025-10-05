// function moveZero(arr){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i]  === 0){
//          for(let j = i +1 ; j<arr.length ; j++){
//             if(arr[j] !== 0){
//                 [arr[i] ,arr[j]] = [arr[j] , arr[i]]
//                 break
//             }
//          }
            
//         }
//     }
//     return arr
// }

// console.log(moveZero([0, 1, 0, 3, 12] ));


function moveZero (arr){
    let index = 0 
    for(let  i = 0  ; i < arr.length ; i++){
        if(arr[i] !== 0){
            [arr[index] , arr[i]] = [arr[i] ,arr[index]]
            index ++
        }
    }
    return arr
}

console.log(moveZero([0, 1, 0, 3, 12] ));