// function countZero(n){
//     let res = 1
//     let count = 0
//     let tem = n
//    for(let i =2 ; i<=n; i++){
//       res = res * i
//    }
//    console.log(res);
   

//     while( res % 10 == 0){
//         count ++
//         res = Math.floor(res / 10)
//     }
//     return count
   
// }

// console.log(countZero(5))


// More Effecative way

// function TrillingZero (n){
//     let res = 0
//     for(let i = 5 ; i <= n ; i*=5){

//         res += Math.floor(n / i)
//         console.log(i);
        
//     }
//     return res
// }

// console.log(TrillingZero(10));


