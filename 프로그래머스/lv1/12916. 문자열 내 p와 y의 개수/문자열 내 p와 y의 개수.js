function solution(s){
    
    var count1 = 0;
    var count2 = 0;
    var arr = s.toLowerCase().split("");
    for(var i=0;i<arr.length;i++){
        if (arr[i] === 'p'){
            count1++;
        }else if (arr[i] === 'y'){
            count2++;
        }
    } if (count1 === count2){
        return true;
    } else {
        return false;
    }
    
}