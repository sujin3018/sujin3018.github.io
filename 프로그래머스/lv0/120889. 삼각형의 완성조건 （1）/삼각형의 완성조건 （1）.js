function solution(sides) {
    
    var k = sides.sort((a, b)=> a-b)
    
    return  k[0]+k[1] > k[2] ?  1 :  2;

}