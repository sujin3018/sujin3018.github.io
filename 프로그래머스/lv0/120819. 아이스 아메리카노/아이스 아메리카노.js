function solution(money) {
    
    
    var ans = parseInt(money / 5500)
    var total = [ans , money% 5500];
    return total;
}