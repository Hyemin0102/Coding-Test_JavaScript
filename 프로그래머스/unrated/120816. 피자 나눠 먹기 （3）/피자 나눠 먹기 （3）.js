function solution(slice, n) {    
    return n % slice === 0 ? Math.floor(n / slice) : Math.floor(n / slice) + 1
}

/*
    조각을 사람수대로 나눴을때 나머지가 0이면 정수 그대로, 0이 아니면 정수 +1
*/