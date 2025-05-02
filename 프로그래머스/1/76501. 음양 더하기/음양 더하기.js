function solution(absolutes, signs) {
  //signs가 true면 양수, false면 음수
  var answer = 123456789;
  let array = [];

  for (let i = 0; i <= absolutes.length - 1; i++) {
    if (signs[i] === true) {
      //absolutes[i] 를 양수로
      array.push(Math.abs(absolutes[i]));
    } else {
      //absolutes[i] 를 음수로
      array.push(absolutes[i] * -1);
    }
  }

  answer = array.reduce((a, b) => a + b);

  return answer;
}