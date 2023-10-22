function solution(arr) {
    const minNumber = Math.min(...arr)
    arr.splice(arr.indexOf(minNumber),1)
    const answer = arr.length ? arr : [-1]
    return answer;
}