function solution(n) {
    var answer=[];
    for(let i=0; i<=n; i++){
        if(n % i == 0) answer.push(i)
    }
    return answer.length
}

/*
순서쌍의 갯수는 약수의 갯수와 동일함. 즉, 약수(나누어떨어지는 수)의 갯수 구하기
for문으로 n까지 1씩 더해서 전체 반복
*/