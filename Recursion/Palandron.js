function isPala (s,start,end){
    if(start>=end){
        return true
    }
    return (s[start] === s[end] && isPala(s,start + 1,end-1))
}

console.log(isPala('acbca',0,4));
console.log(isPala('Hello',0,4));
console.log(isPala('acbca',0,4));
