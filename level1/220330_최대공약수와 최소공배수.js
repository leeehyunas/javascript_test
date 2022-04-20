function solution(n, m) {
  // 최대공약수
  var answer = [];
  const big = (a, b) => {
    if (b === 0) return a
    return big(b, a % b)
  }
  // 최소공배수
  const small = (a, b) => (a * b) / big(a, b)
  return [big(n, m), small(n, m)];
}
console.log(solution(23, 2))