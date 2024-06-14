function solution(start_num, end_num) {
    let answer = [];
    //i가 10, 3까지
    for(let i=start_num; i >= end_num; i--){
        answer.push(i)
    }
    console.log(answer)
    return answer;
}

//배열에 start_num 부터 end_num 까지 -1 해서 배열에 넣어