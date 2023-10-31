function solution(my_string, n) {
    return [...my_string].map(item=> item.repeat(n)).join('')
}

/*
    문자열을 배열로 하나씩 나누고, 각 item마다 n번만큼 동일한 문자열 반복
    my_string.split('') 대신 [...my_string] 사용도 ok
*/