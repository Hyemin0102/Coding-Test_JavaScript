function solution(sides) {
    let newArr = sides.sort((a,b)=>b - a);
    return newArr[0] < newArr[1] + newArr[2] ? 1 : 2
}

/*
3개 중 가장 큰 숫자 제외, 나머지 두 숫자의 합이 가장 큰 숫자보다 작아? 1, 아니면 2
sort로 오름차순 정렬해 1, 2번째 인덱스 합과 0번째 인덱스 비교
*/