function solution(n) {
    
    var ans = parseInt(n / 7)
    if ( n % 7 == 0) {
        result = ans;
    } else {
        result = ans + 1; 
    }

    return result;
}