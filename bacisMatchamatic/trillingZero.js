// function trillingZero (num){
//     let fact = 1 , count = 0

//     for(let i = 2 ; i<=num ; i++){
       
//         fact = fact * i
        
//     }
//     console.log(fact);
    
//     while (fact % 10 === 0){
//         count ++
//         fact = fact / 10
//     }

   
//     return count
// }

// console.log(trillingZero(5));
 

// For my task 

function zero (n){
    let temp = n , count = 0
    while (temp % 10 === 0){
        count ++
        temp = temp / 10
    }
    return count
}

console.log(zero(100));
