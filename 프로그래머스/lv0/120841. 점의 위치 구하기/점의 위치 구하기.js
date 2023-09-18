function solution(dot) {
    
    if (dot[0] > 0 && dot[1]>0 ) {
        var answer = 1;
    } else if (dot[0] <0 && dot[1] >0) {
        var answer = 2;
    }else if (dot[0] <0 && dot[1] <0) {
        var answer = 3;
    } else {
        var answer = 4;
    }
    
    return answer;
}