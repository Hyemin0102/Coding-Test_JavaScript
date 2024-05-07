function solution(n, numlist) {
    let array = numlist.filter(item => item % n === 0 )
    return array;
}

//numlist 중 n의 배수가 아닌 것 제거