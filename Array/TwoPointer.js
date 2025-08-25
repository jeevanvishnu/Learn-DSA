/*
input = [2,5,8,12,13]
targer = 17
*/

function TwoPointer (arr,t) {
    let left = 0 ; right = arr.length-1
    
    while(left < right) {
        
        if(arr[left] + arr[right] === t) {
            return [left,right]
        }else if(arr[left] + arr[right] < t) {
            left ++
        }else {
            right --
        }
    }
    return false
}

console.log(TwoPointer([2,5,8,12,13],17));
