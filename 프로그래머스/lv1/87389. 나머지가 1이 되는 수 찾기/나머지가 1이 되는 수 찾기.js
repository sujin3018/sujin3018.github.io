function solution(n) {
    
    for(var i=1;i<n;i++){
        if(n % i == 1){
            var answer = i;
            break;
        }
    }
    
    return answer;
}