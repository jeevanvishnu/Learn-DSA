function fun (num){
    if(num === 0) return
    console.log(num);         
                        //   3 2 1
    fun(num-1)
    console.log(num);
    
    
}
fun(3)


