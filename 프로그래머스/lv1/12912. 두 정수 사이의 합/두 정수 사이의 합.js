function solution(a, b) {
    
      if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }
    
    var count = 0;
    for(var i =a ;i<=b;i++){
        count += i;
    }
    
    return count;
}