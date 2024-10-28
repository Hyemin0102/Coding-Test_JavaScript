function solution(num_str) {
    //문자열을 배열로 변환
    var answer = Array.from(num_str);
    //문자열 아이템들을 숫자로 변환
    let numArray = answer.map(item => Number(item));
    //배열의 숫자 더하기
    let result = numArray.reduce((a,b) => a+b);
    return result;
}