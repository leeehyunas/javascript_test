function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  console.log(upper.length)
  const lower = "abcdefghijklmnopqrstuvwxyz"
  const length = upper.length

  let answer = ''

  for (let i = 0; i < s.length; i++) {
    let position = upper.includes(s[i]) ? upper : lower.includes(s[i]) ? lower : null
    if (position) {
      console.log(position)
      const idx = position.indexOf(s[i]) + n
      console.log(idx)
      // n만큼 더해주게 되면 upper.length가 26을 넘어갈때가 있음 그럴 때는 idx-length
      answer += idx >= length ? position[idx - length] : position[idx]
    } else {
      answer += " "
    }
  }

  return answer;
}

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
console.log(upper.charCodeAt(0))
console.log(lower.charCodeAt(0))
console.log(String.fromCharCode(65))
console.log(String.fromCharCode(97))

console.log(solution("A f Bd aZ", 1))