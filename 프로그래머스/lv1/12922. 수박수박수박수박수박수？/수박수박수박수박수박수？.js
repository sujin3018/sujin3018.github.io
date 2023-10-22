function solution(n) {
    var sum= "";
    for(var i= 1;i<=n;i++){
        if(i % 2=== 1){
            sum+= "수";
        }else if(i % 2 === 0){
                sum+= "박";
            }
        }

    return sum;
}