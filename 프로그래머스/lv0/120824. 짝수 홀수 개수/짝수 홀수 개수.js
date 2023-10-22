function solution(num_list) {
    var evenCount = 0;
    var oddCount = 0;
    
    for (var i =0; i< num_list.length;i++) {
        if(num_list[i] % 2 ==0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return [evenCount, oddCount];
}