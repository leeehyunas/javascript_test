function solution(n) {
  let arr = []
  for (let i =2; i<=n; i++) {
    arr[i] = i
    console.log(arr)
  }
  for (let i =2; i<=n; i++) {
    if(arr[i] === 0) continue
    for (let j=i*2; j<=n; j+=i) {
      arr[j] = 0
    }
  }
  console.log(arr)
  const answer = arr.filter(item => item !== 0).length
  console.log(answer)
  return answer
}
solution(10)