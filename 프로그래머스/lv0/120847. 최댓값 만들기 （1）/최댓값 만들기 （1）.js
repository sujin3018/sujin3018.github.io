function solution(numbers) {
    
   const a = numbers.sort((a,b)=> b-a)
    return a[0] * a[1];
}