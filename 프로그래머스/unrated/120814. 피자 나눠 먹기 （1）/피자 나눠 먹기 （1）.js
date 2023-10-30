function solution(n) {
    var answer = n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
    return answer;
}
/*
% 나머지는 왼쪽에서 오른쪽을 나누고 나머지 구함. 왼쪽이 더 작은 경우 그대로 출력
- 7의 배수인 경우 나눈 정수값 그대로, 7의 배수가 아닌 경우 정수에서 1 더해서
*/