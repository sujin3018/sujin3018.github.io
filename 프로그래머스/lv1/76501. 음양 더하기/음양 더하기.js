function solution(absolutes, signs) {
    
    var sum1 = 0;
    var sum2 = 0;
    
    for(var i=0;i<signs.length;i++){
            if(signs[i] === true){
                sum1 += absolutes[i];
            } else {
            sum2 -= absolutes[i]; 
    }
   
}
    return sum1 + sum2;
}