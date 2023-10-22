function solution(n)
{
    var nStr = n.toString();
    var answer =0;
    
    for (var i=0;i<nStr.length;i++) {
       answer += parseInt(nStr[i], 10);
    }
    return answer;
}