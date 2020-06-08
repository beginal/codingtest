function solution(n) {
  var answer = '';
  let wm = '수박';
  if( n % 2 === 0) {
    for(let i =0; i < n/2; i++) {
      answer += wm
    }
  } else if ( n % 2 === 1) {
    for(let i =0; i < Math.floor(n/2); i++) {
      answer += wm
    }
      answer += "수"
  }
  return answer;
}