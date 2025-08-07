// function palandron (nums){
//     let str = nums.toString()
//     let reverse = str.split('').reverse().join('')
//     return str === reverse
// }

// console.log(palandron(121));


const isPlandron = (n)=>{
    let res = 0 , temp = n
    while(temp !== 0){
        let last  = temp % 10
        console.log(last);
        
        res = res * 10 + last
        
        
        temp =Math.floor( temp / 10)
        
    }
    return (res === n)
}

console.log(isPlandron(199));
