function solution(arr, divisor) {
    
    var arr2 = [];
    for(var i =0; i<arr.length;i++){
        if(arr[i] % divisor === 0){
            arr2.push(arr[i]);
        } 
    }if (arr2.length === 0){
        arr2.push(-1);
    }
    
    return  arr2.sort((a,b)=> a - b);
}