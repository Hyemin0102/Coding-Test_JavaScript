function solution(a, b) {
  var answer = 0;

  let length = a.length;

  for (let i = 0; i < length; i++) {
    let bb = a[i] * b[i];
    answer += bb;
  }

  return answer;
}