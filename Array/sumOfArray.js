function sumOfArray (arr){
    let sum = 0
    for(let num of arr)
        sum += num

    return sum
}

console.log(sumOfArray([1,2,3,4]));
