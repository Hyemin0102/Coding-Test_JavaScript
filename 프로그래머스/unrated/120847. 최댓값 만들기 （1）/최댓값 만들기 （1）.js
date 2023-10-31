function solution(numbers) {
    var sortArr = numbers.sort((a,b) => b - a);
    return sortArr[0] * sortArr[1]
}

/*
가장 큰 수 두개를 곱해주면됨. 내림차순으로 정렬
*/