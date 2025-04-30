function solution(n) {
  var answer = [];
  let array = String(n).split("");
  let number = array.map(Number)
  answer = number.reverse();
    
  return answer;
}