function solution(s1, s2) {
   
  return s1.filter(element => s2.includes(element)).length;
}
