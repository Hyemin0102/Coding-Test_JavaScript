function solution(my_string) {
    let aa = "aeiou"
    let arr = aa.split("")
    return [...my_string].filter(item => !arr.includes(item)).join("")
}
/*
문자열에서 [a, e, i, o, u] 가 들어가 있으면 제거
모음을 문자열 배열로 만들고, 그 배열에서 my_string 아이템이 있는지 filter 돌려서 없는 것만 반환
*/