// function prime (a){
//     if (a <= 1) return "Not Prime"

//     for(let i = 2 ; i< a ; i++){
//         if(a % i === 0){

//             return "This is not a prime number"
//         }
        
//     }
//     return  "This is a prime number"
// }

// console.log(prime(2));


// optimaise way

function prime (n){
    if (n === 1) return 'Not Prime'

    for(let i = 2 ; i*i <= n;  i++){
        if(n % i === 0) return "Not a prime" 
    }
    return "its a prime number"
}

console.log(prime(5));
