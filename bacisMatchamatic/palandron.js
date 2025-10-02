function palandeon (num){
 let res = 0 , temp = num

 while(temp != 0 ){
   const lastDigit = temp % 10
   console.log(lastDigit);
   
   res = res * 10 + lastDigit
   temp = Math.floor(temp / 10)
 }
 return (res === num)
   
}

console.log(palandeon(303));

