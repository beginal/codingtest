function solution(s) {
  let answer = true
  s = s.split('');
  s.map((num) => {
    if (isNaN(num) || s.length !== 4 && s.length !== 6) {
      answer = false
    }
  })
  return answer;
}