function solution(strings, n) {
  // 배열 안에서 n(index)번째에 해당하는 알파벳 찾아서 정렬
  // const answer = strings.sort((a, b) => 
  //   a[n] === b[n] ?
  //     a.localeCompare(b)
  //   :
  //     a[n].localeCompare(b[n])
  // )
  // const answer = strings.sort((a, b) =>{
  //   const first = a[n]
  //   const second = b[n]
  //   if (first === second) {
  //     return (a > b) - (a < b)
  //   } else {
  //     console.log(first)
  //     console.log(second)
  //     return (first > second) - (first < second)
  //   }
  // })
  const answer = strings.sort((a,b) => {
    const first = a[n]
    const second= b[n]
    console.log((a > b) - (a < b))
    console.log(b[0])
    if (first === second) {
      return (a > b) - (a < b)
    } else {
      return (first > second) - (first < second)
    }
  })
  console.log(answer)
  // 사전순서대로 정렬
}
solution(["sun", "bed", "aer"], 1)
