function solution(arr) {
  const answer = []
  // 최소값 구하고 
  const num = arr.indexOf(Math.min(...arr))
  console.log(num, arr)
  // 가장 작은 수 제거
  arr.splice(num, 1)
  answer.push(...arr)
  // 나머지 리턴하고 비었을 경우 -1 리턴
  if (arr.length < 1) {
    arr.push(-1)
    console.log(arr)
    return arr
  }
  return answer
}
console.log(solution([10]))