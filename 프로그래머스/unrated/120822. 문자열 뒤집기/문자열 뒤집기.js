function solution(my_string) {
    var answer = my_string.split('').reverse().join('');
    return answer;
}

//reverse 메서드는 배열에서만 사용 가능하므로 split으로 전부 배열로 나눴다가 뒤집고 다시 합침


/*function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}*/