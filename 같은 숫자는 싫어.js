function solution(arr)
{
    var answer = [];
  arr.map((prevState,i) => {
    if(prevState === arr[i+1]) {
      if (arr[i+1] === arr[i+2]) {
        return;
      }
      answer.push(prevState)
    } else if (prevState !== arr[i-1] && prevState !== arr[i+1] ) {
      answer.push(prevState)
    }
  })
    
    return answer;
}