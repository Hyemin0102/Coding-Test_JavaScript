function solution(n) {
    var num = Math.sqrt(n);
    return Number.isInteger(num) ? 1 : 2
}

/*
제곱근 구하는 Math.sqrt() 사용. 소수점 나오면 제곱근 아님
정수 판별하는 Number.isInteger() 사용.
*/