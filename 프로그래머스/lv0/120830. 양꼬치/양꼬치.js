function solution(n, k) {
    
    if (n % 10 >= 0) {
     answer = 12000 * n + 2000 *(k- parseInt(n / 10))
    }
    return answer;
}