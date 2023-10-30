/*function solution(dot) {
    var answer = 0;
    if(dot[0] > 0 && dot[1] > 0){
        answer = 1;
    } else if(dot[0] < 0 && dot[1] > 0){
        answer = 2;
    } else if(dot[0] < 0 && dot[1] < 0){
        answer = 3;
    } else {
        answer = 4;
    }
    
    return answer;
}*/

//삼항연산자
function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}
// dot[0] > 0 이 참? -> dot[1] > 0 이 참 ==> 1
// dot[0] > 0 이 참? -> dot[1] > 0 이 거짓 ==> 4
// dot[0] > 0 이 거짓?  -> dot[1] > 0 이 참? ==> 2
// dot[0] > 0 이 거짓?  -> dot[1] > 0 이 거짓? ==> 3