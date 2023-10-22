function solution(n) {
    
   var nStr = n.toString();
   var arr = nStr.split("").map(Number);
   arr.reverse();
    return arr;
}