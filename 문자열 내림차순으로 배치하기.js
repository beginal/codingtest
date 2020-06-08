function solution(s) {
  var anb = s.split('')
  var answer = anb.sort().reverse();
  let b = answer[0]
  for(let i=1; i< answer.length; i++) {
    b+= answer[i]
    console.log(b)
  }
  answer = b
  return answer;
}