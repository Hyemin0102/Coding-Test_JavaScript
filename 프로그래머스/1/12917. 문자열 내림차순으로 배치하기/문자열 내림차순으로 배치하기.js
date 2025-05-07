
function solution(s) {
  let array = [...s];
  var answer = array.sort().reverse();
  console.log("정렬", answer);
  return answer.join("");;
}