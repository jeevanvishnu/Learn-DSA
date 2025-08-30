function sameOrNot(str1 , str2){
    

    const leng1 = str1.length
    const leng2 = str2.length

    if(leng1 !== leng2 ) return false
    
    
    
   for(let i = 0 ;i<str1.length ; i++){
    if(str1[i]!==str2[i]){
        return false
    }
}
return true
}


console.log(sameOrNot('jeevan vishnu','jeevan vishnu'));



