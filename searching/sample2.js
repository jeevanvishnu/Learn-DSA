

// function searching (arr , t){
//     let count = -1
//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i]===t){
//             count = i
//             break
           
//         }
//     }
//     return count
// }

// console.log(searching([15,15,15],15));


function search (arr ,t){
    let left = 0
    let right = arr.length -1

    while(left <= right){
        let mid = Math.floor((left + right)/2)

        if(arr[mid] === t){
            if(mid === 0 || arr[mid-1] !==t){
                return mid
            }else{
                right = mid-1
            }
        }else if(arr[mid] < t){
            left = mid + 1

        }else{
            right = mid -1
        }

    }
    return -1
}


console.log(search([1,5,10,10],10))
