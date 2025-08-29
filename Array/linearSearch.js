function linearSearch (arr ,target){

    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] === target) return i
    }
    return -1
}

let array = [7,2,9,1,5]
console.log(linearSearch(array,9));
