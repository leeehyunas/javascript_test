function solution(s) {
  const text = s.split(' ')
  console.log(text)
  const answer = []
  for (let i = 0; i < text.length; i++) {
    console.log(i, text[i])
    const result = text[i].split('')
    console.log(result)
    answer.push(result.map((item, j) => j % 2 ? item.toLowerCase() : item.toUpperCase()).join(''))
  }
  console.log(answer)
  return answer.join(' ');
}
console.log(solution('happy birthday to you'))