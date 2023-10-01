3
4
5
6
7
8
9
10
function solution(price, money, count) {
    let answer = 0;

    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }

    return answer > money ? answer - money : 0;
}