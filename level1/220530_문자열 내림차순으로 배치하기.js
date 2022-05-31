function solution(s) {
  const answer = s.split('').sort().reverse().join("")
  // const answer = s.split('').sort((a,b) => {
  //   if (a>b) {
  //     return -1
  //   } else {
  //     return 1
  //   }
  // }).join("")
  console.log(answer)
  return answer
}
solution('ZbcdeFg')