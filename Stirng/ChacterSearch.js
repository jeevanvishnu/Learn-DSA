function search(str,t){
    let i = 0
    let s = str.length
    
    while(i <= s){
        if(str[i]===t) return i
        i++
    }
}

console.log(search("jeevan",'n'));
