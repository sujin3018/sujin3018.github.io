function solution(left, right) {
    
    var sum = 0;
    for(var i=left;i<=right;i++){

        Math.sqrt(i) % 1 === 0 ? sum -= i : sum+= i ;
    }
    
    return sum;
}