function solution(phone_number) {
  var answer = '';
  var back = '';
  var ans = '';
  answer = phone_number.split('')
  back = answer.splice(answer.length-4)
  answer = answer.map((a) => {
    ans += a.replace(/\d/g,'*')
  })
  for( let i = 0; i < back.length; i++) {
    ans += back[i]
  }
  return ans;
}