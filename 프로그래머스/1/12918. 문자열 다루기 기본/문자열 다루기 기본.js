function solution(s) {
  var answer = true;
  let reg = /^[0-9]*$/;

  answer = (s.length === 4 || s.length === 6) && reg.test(s);
  console.log(answer);

  return answer;
}