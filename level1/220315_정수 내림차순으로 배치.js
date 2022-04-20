function solution(n) {
  const answer = n.toString().split('')
  return Number(answer.sort((a, b) => b - a).join(''))
}

console.log(solution(29871))