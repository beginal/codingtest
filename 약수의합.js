function solution(n) {
  if( n === 0) {
    return 0
  }
  var answer = 0;
  for(let i=1; i<=n/2; i++) {
    if(n % i == 0) {
      answer += i
    }
  }
  return answer+n;
}

console.log(solution(12))