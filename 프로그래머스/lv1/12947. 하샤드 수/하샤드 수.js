function solution(x) {
    var nStr = x.toString();
    var arr = nStr.split("").map(Number);
    var sum =0;
    
    for(var i=0;i<arr.length;i++){
       sum += arr[i];
    } if (x % sum ===0){
        return true;
    }else {
        return false;
    }

}