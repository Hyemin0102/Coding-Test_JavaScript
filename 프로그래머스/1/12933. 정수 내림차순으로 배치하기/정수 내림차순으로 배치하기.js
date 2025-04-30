function solution(n) {
  var answer = 0;
  answer = String(n).split("");
  let numberArray = answer.map(Number);
  let sortArray = numberArray.sort((a, b) => b - a);
  answer = sortArray.join('');
  
  return Number(answer);
}