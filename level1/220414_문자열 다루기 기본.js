function solution(s) {
  // 01. paresInt
  // const answer = (s.length === 4 || s.length === 6) && s == parseInt(s)
  // return answer
  // 02. every를 이용해서 숫자인지 아닌지 확인
  // if (s.length === 4 || s.length === 6) {
  //   console.log(s.split(''))
  //   return s.split('').every(item => !isNaN(item))
  // }
  // 03. 정규식을 이용해 test()
  const reg = /^\d{6}$|^\d{4}$/
  return reg.test(s)
}

console.log(solution("3411"))