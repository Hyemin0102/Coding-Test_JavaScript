//map 사용
/*function solution(array, n) {
    var answer = 0;
    array.map(item => {
        if(item == n){
            answer++;
        }
    })
    
    return answer;
}*/

//filter 사용
function solution(array, n) {
    return array.filter(item=> item == n).length
}
