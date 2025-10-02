// function gcd (a , b) {
//     let res =  Math.min(a , b)

//     while(res > 0){
//         if(a % res === 0 && b % res === 0){
//             return res
//         }else {
//             res --
//         }
//     }
//     return res
// }

// console.log(gcd(6 , 3));



// simple method 

function gcd (a , b){
    if(b === 0){
        return a
    }
    return (b , a % b)
}

console.log(gcd(15 , 10));
