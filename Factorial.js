// function Factiorial (n){
//     let res = 1
//     for(let i = 2 ; i<=n ; i++){
//         res = res * i
//     }
//     return res
// }

// console.log(Factiorial(4));



// recursive way 

function Factiorial(n){
    if(n==0){
        return 1
    }
    return n * Factiorial(n-1)
}

console.log(Factiorial(4));
