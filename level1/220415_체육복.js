function solution(n, lost, reserve) {
  let answer = n - lost.length
  // 여별 옷이 있고, 체육복을 도난 당한 경우
  lost = lost.filter((lostStudent) => {
    let revIdx = reserve.findIndex(reverseStudent => reverseStudent === lostStudent)
    if (revIdx === -1) return
  })
  // 여벌 옷이 없고, 체육복을 도난 당한 경우 -> 자기보다 앞번호 친구에게 우선순위로 빌려야 최대 값
  lost.forEach(lostStudent => {
    let revIdx = reserve.findIndex(reverseStudent => lostStudent - reverseStudent === 1 || reverseStudent - lostStudent === -1)
    if (revIdx !== -1) {
      reserve.splice(revIdx, 1)
      answer++
    }
  })
  return answer;
}

console.log(solution(3, [2, 4], [1, 3, 5]))