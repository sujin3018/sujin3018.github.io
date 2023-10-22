function solution(n) {
    
    var num = n.toString(); // 문자열로 변환
    var sum = 0;
    
    for(var i =0; i<num.length;i++) {
        sum += parseInt(num[i], 10);
    }

    return sum;
}