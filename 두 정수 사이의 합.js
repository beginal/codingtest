function solution(a, b) {
  var answer = 0;
  if(a > b) {
    for(let i=0; a-b > i; i++) {
      answer += (b+i)
    }
    answer += a

  } else if (a < b) {
    for(let i=0; b-a > i; i++) {
      answer += (a+i)
    }
    answer += b
  } else {
    return a
  }  
  return answer;
}