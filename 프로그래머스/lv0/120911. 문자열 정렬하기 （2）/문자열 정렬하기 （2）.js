function solution(my_string) {
   
    let lower = my_string.toLowerCase();
    let answer = lower.split('').sort().join('');
    return answer;
}