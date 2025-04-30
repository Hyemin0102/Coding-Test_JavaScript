function solution(n) {
  var answer;
  let string = String(n);
  let array = Array.from(string);
  let numberAnswer = array.map(Number);
  answer = numberAnswer.reduce((a, c) => a + c, 0);

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");
  return answer;
}