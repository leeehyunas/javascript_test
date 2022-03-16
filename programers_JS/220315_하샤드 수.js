function solution(x) {
  const num = x.toString().split('')
  let answer = 0
  for (let i = 0; i < num.length; i++) {
    answer += parseInt(num[i])
  }
  const check = x % answer
  return check === 0 ? true : false
}
console.log(solution(15))