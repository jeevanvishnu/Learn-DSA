function prefixSum (arr){

    let prefixTotal = []

    prefixTotal[0] = arr[0]

    for(let i = 1 ;i< arr.length ; i++){
        prefixTotal[i] = prefixTotal[i-1] + arr[i]
    }

    return prefixTotal
}

let arr = [10,20,30,40,50]
console.log(prefixSum(arr));
