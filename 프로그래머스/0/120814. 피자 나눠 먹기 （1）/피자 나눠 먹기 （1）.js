function solution(n) {
    //7의 배수? -> 나눈 값, 배수 아니면? 한판 더
    //나눈 몫 
    //나머지
    let answer = Math.floor(n % 7) === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1; 
    return answer;
}

//피자가 일곱 조각, 피자 나눠 먹을 사람 n명, 모든 사람이 피자 한조각 이상 먹어야함

