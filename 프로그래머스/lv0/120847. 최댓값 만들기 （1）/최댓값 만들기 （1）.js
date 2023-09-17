function solution(numbers) {
    
   numbers.sort((a, b) => a - b);
    
    var len = numbers.length;
    var maxProduct = numbers[len - 1] * numbers[len - 2];
    
    return maxProduct;
}