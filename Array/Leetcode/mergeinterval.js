
/*
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
Example 3:

Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.
*/

function mergeInterval(intreval){
    if(intreval.length === 0) return []
    intreval.sort((a,b)=>a[0] - b[0])
    let result = [intreval[0]]
    console.log(intreval.length);
    
    for(let i = 1 ; i< intreval.length ; i++){
        let last = result[result.length -1]
        console.log(last);
        
        let current = intreval[i]
        console.log(current);
        
        if(current[0] <= last[1]){
            last[1] = Math.max(last[1], current[1])
        }else{
            result.push(current)
        }
    }
    return result

}

console.log(mergeInterval([[1,3],[2,6],[8,10],[15,18]]));
