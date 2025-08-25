const largest = (num) =>{
    let max = num[0]
  for(let i = 1 ; i<num.length ; i++){

      if(num[i] > max){
        max = num[i]
      }
  }
  return max
}

console.log(largest([1,2,5,20,4,3])) 

