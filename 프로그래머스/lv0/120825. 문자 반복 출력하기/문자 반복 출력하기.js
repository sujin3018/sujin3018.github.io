function solution(my_string, n) {
    
    var arr = '';
    
    var str = my_string.split('');
    for(var i=0;i<str.length;i++) {
     arr += str[i].repeat(n);
    }
    
   return arr;

}