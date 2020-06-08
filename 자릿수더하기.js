function solution(n)
{
  let answer = 0;
  console.log(n)
  let a = String(n).split('');
  console.log(a);
  for(let i=0; i < a.length; i++) {
    answer += Number(a[i])
  }
    return answer;
}