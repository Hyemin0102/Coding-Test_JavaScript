function solution(x, n) {
    var answer = [];
    answer.push(x);

    for(let i=0; answer.length <= n-1; i++){
        answer.push(answer[i]+x) 
    }

    return answer;
}