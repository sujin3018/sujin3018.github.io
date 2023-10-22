function solution(my_string) {
    
    var sum = 0;
    
    for (var i=0;i<my_string.length;i++) {
       if (my_string[i]>0) {
       sum += Number(my_string[i]);
    }
    }

    return sum;
}