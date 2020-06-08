function solution(s){
  var answer = true;
  var ab = s.split('');
  var pq = 0;
  var yq = 0;
  ab.map((str) => {
    if(str === 'p' || str === 'P') {
      pq+=1
    }
    if(str === 'y' || str === 'Y') {
      yq+=1
    }
  })
  answer = pq === yq ? true : false

  return answer;
}