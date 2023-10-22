function solution(n) {
    
    var nStr = n.toString();
    var arr = nStr.split("").map(Number);
    
   var a = arr.sort((a,b) => b-a)
    
    var answer = parseInt(a.join(""),10);
    return answer;
}