function solution(num_list) {
    return answer = num_list.length >= 11 ? num_list.reduce((acc, cur) => acc + cur, 0) : num_list.reduce((acc, cur) => acc * cur);
}