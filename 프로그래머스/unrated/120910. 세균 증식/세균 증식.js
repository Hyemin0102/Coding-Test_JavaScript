function solution(n, t) {
    
    for(let i = 0; i < t; i++){
         n *= 2
    }
    return n
}

/*
t시간당 n은 두배씩 증가
1시간, 2마리
2시간, 4마리
3시간, 8마리
*/