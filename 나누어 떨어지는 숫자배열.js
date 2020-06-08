function solution(arr, divisor) {
  let ab = []
  let ac = 0;
  for(let i=0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      ab.push(arr[i])
    }
    if (arr[i] % divisor !== 0) {
      ac++
      if( ac == arr.length) {
        return [-1]
      }
    }
    ab.sort((a,b) => a-b)
  }
  return ab;
}