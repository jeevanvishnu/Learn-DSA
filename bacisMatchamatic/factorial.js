function factiorial (num){
  let res = 1 , temp = num

  while (temp != 0){
    res *= temp
    temp --
  }
  return res
}
console.log(factiorial(4));
