function solution(array, commands) {
  let answer = []; // array [1,5,2,6,3,7,4]  commands[[2,5,3],[4,4,1],[1,7,3]]
  for(let i=0; i < commands.length; i++) { // commands 배열의 갯수 3개만큼 반복
    let [a,b,c] = commands[i];  // i번째 배열을 구조분해 ex) 2,5,3 
    let bns = []
    bns = array.slice(a-1,b) // index 2-1 부터 5번째이전까지 잘라서 bns배열로
    bns.sort((a , b) => a - b) // 배열 정렬
    bns[c-1] // bns배열의 3-1 인덱스 ex) 5
    answer.push(bns[c-1]) // answer 배열에 위 값을 넣는다. 3회 반복시 5,6,3
  } 
  return answer;
}