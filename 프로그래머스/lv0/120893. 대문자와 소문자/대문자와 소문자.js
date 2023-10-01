function solution(my_string) {
    var answer = '';

    for (var i = 0; i < my_string.length; i++) {
        var char = my_string[i];

        if (char >= 'A' && char <= 'Z') {
            answer += char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            answer += char.toUpperCase();
        } 
    }
    
    return answer;
}
