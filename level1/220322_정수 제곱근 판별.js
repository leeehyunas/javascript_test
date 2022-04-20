function solution(n) {
  // 제곱수가 아니면 애초에 num에서 소숫점으로 나옴
  const num = Math.sqrt(n)
  // 즉 1로 나눠서 나머지가 0이면 제곱수라는 것
  if (num % 1 === 0) {
    return Math.pow(num + 1, 2)
  }
  return -1
}
console.log(solution(3))