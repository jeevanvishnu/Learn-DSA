function sell(prices) {
    let max = 0 
    for(let i = 0 ; i<prices.length ;i++){
        for(let j = i+1 ; j<prices.length ; j++){
            let profit  = prices[j]-prices[i]
            if(profit > max){
                max = profit
            }
        }
    }
    return max
};

console.log(sell([7,1,5,3,6,4]));
