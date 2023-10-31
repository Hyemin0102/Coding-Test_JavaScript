function solution(n) {
    var numArr = [...n.toString()].map(Number);
    return numArr.reduce((a,b)=>a + b);
}
            
/*
1234 문자열을 숫자열 배열로 변환 [...n.toString()] 까지만 하면 ["1","2","3","4"]
.map(Number) 로 전부 숫자로 변환 -> reduce 로 배열 숫자 더하기 
*/