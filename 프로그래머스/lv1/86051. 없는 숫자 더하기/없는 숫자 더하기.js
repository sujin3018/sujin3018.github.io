function solution(numbers) {
    
    var sum =0;
    for(var i=0; i<=9;i++){
        if(!numbers.includes(i)){
            sum+= i;
        }
    }
    
    return sum;
}