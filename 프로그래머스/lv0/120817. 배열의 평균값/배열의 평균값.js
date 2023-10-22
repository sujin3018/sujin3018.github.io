function solution(numbers) {
    
    var answer = numbers.reduce((a,c) => a+c) /  numbers.length;
    return answer ;
}