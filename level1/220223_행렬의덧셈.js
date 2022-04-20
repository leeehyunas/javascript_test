function solution(arr1, arr2) {
  // answer 01.
  const result = arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]))
  // answer 02. 
  // const answer = []
  // let len = arr1.length 
  // let arrayLen = arr1[0].length
  // for(let i=0; i<len; i++) {
  //   answer.push([])
  //   for(let k=0; k<arrayLen; k++) 
  //     answer[i][k] = arr1[i][k] + arr2[i][k] 
  //   }  
  // }
  return result
}

console.log(solution([[1, 2], [2, 1]], [[3, 1], [4, 1]]))
