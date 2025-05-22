function solution(n) {
    var answer = [];
    //배열로 수, 박을 넣고 스트링으로 변환
    for(let i = 1; i <= n; i++) {
        if(i % 2 === 0){ 
            answer.push("박")
        } else {
             answer.push("수")
        }
    }
    
    return answer.join("");
}