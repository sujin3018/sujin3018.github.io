function solution(phone_number) {
    
   var length = phone_number.length;
   var num = '*'.repeat(length - 4) + phone_number.slice(-4);
    return num;

    return num;
}