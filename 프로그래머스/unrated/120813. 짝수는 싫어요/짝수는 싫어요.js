function solution(n) {
    var arr = [];
    for(let i = 0; i <= n; i++){
        arr.push(i)
    }
    return arr.filter(item=> item % 2 === 1 )
}
/*
0~n까지 +1 하는 반복문으로 전체 배열 만들고, 그 중 홀수만 다시 배열 반환
*/