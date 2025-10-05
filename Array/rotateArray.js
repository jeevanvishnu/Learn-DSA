// function rotate(arr , k){
//     let count = 0
//     for(let i = 0 ; i<arr.length ; i++){
//         if( i === k){
//             [arr[i] , arr[count]] = [arr[count] ,arr[i]]
            
//         }
//     }
//     return arr
// }

// console.log(rotate([1, 2, 3, 4, 5],2));


function rotate (arr , k ){
    k = k % arr.length
    
    let part = arr.splice(arr.length - k)
    console.log(part);
    
    let connect = part.concat(arr)
    return connect
}

console.log(rotate([1, 2, 3, 4, 5],2));

let a = [1, 2, 3, 4, 5];

