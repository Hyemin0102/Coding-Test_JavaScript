function solution(my_string, is_prefix) {
    let string = my_string.slice(0, is_prefix.length)
    var answer = string === is_prefix ? 1 : 0;
    return answer;
}

//문자열 0번째 인덱스부터, prefix 전체와 동일한지 비교, 동일? 1:0
//is_prefix.length 만큼 my_string 잘라