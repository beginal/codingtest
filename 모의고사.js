function epg(numb,answers) {
  if(numb.length < answers.length) {
    let ep = answers.length - numb.length
    ep =  numb.slice(0,ep)
    numb = numb.concat(ep)
    return numb;
  } 
    if (numb.length > answers.length) {
      let ep = numb.length - answers.length
      for(let i =0; i < ep; i++) {
        numb.pop()
      }
    return numb;
  } else {
    return numb;
  }
}
function solution(answers) {  
  let users = {
    one : [1,2,3,4,5],
    two : [2,1,2,3,2,4,2,5],
    three : [3,3,1,1,2,2,4,4,5,5]
    }
  let {one,two,three} = users;
  let result = [];
  one = epg(one,answers)
  two = epg(two,answers)
  three = epg(three,answers)
  console.log(one)
  console.log(two)
  console.log(three)
  let bn = 0;
  let userm = [one,two,three]
  for(let j = 0; j < userm.length; j++) {
    for( let i = 0; i < answers.length; i++) {
      if(userm[j][i] === answers[i]) {
        bn++
      }
    }
    result.push(bn)
    bn = 0;
  }
  let end = [];
    let max= result.reduce((a,b) => {
      return Math.max(a,b)
    })
    console.log(result)
    console.log(max)
    for(let i = 0; i < result.length; i++) {
      if(result[i] === Number(max)) {
        end.push(i+1)
      }
    }
    return end;
  }


console.log(solution([1,2,3,4,5]))
console.log(solution([1,3,2,4,2]))
console.log(solution([3,3,1,1,5]))
console.log(solution([1,3,2,4,2,5,5,3,1]))

// 실패..
