function solution(n){
    let num = 0
    let stringNum = n.toString().split("")
    // answer 01.
    // stringNum.forEach((ele, i) => num = num + + ele)

    // answer 02.
    console.log(stringNum.length)
    for (let i = 0; i < stringNum.length; i++) {
        num += parseInt(stringNum[i])
    }
    return num
}
console.log(solution(982))