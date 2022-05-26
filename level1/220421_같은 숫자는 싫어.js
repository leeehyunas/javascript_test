function solution(arr) {
 // const answer = [...new Set(arr)]
  const answer = arr.filter((item, i) => item !== arr[i+1])
// let answer = arr.reduce((acc, item)=> acc.includes(item) ? acc : [...acc,item], [])
// let answer = []
// const answerFunction = arr.forEach((item) => {
//   if(!answer.includes(item)) answer.push(item) 
// })
}

solution([1,1,3,4,7,7,7,9,9,1,1,9])