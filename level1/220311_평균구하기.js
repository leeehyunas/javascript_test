function solution(s) {
  // answer 01.
  // const num = s.slice()
  // let answer = 0
  // console.log(num)
  // for (let i = 0; i < s.length; i++) {
  //   answer += num[i]
  //   console.log(answer)
  // }
  // return answer / s.length;

  // answer 02.
  const result = s.reduce((sum, item) => sum + item, 0) / s.length
  return result
}
console.log(solution([1, 2, 3, 4]))