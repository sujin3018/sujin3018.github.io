function solution(num) {
    var count=0;
    var i =1;
    
   while(num != 1 && i< 500){
       if(num%2===0) {
           num = num /2;
       } else {
           num = num * 3+1;
       } count++;
          i++;
        }
       
        return num === 1? count : -1;
        }

    