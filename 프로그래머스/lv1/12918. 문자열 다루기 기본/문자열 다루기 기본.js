function solution(s) {
    // 문자열 길이가 4 또는 6이 아니면 false 반환
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 모든 문자가 숫자인지 확인
    for (var i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            return false;
        }
    }
    
    return true;
}