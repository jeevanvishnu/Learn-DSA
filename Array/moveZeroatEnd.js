// function moveZero(arr){

//     for(let i = 0 ; i< arr.length ;i++){
//         if(arr[i] === 0){
//             for(let j = i+1; j < arr.length ; j++ ){
//                 if(arr[j] !== 0){
//                    [ arr[i] , arr[j] ] = [arr[j], arr[i]]
//                    break
//                 }
//             }
//         }
//     }
//     return arr
// }

// console.log(moveZero([10, 0 , 0, 7 , 8 , 0]));


// Effective approach

function moveZero (arr){
    let count = 0
    for(let i  = 0 ; i<arr.length ; i++){
        if(arr[i] !==0){
            [arr[i],arr[count]]= [arr[count] ,arr[i]]
            count ++
        }
    }
    return arr
}

console.log(moveZero([10,0,0,7,8,0]));
