function solution(array) {
    
   var a = array.sort((a,b)=> a-b)
   var b = parseInt(a.length / 2) 
    
    return array[b];
}