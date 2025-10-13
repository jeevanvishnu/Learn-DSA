function quick (arr){
    if(arr.length<=1) return arr
        let povit = arr[arr.length-1]
        let left = []
        let right = []

        for(let  i = 0 ; i< arr.length-1 ; i++){
            if(arr[i] < povit){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
   
    
    return[...quick(left),povit,...quick(right)]
}

console.log(quick([2,1,4,3,6,5]));
