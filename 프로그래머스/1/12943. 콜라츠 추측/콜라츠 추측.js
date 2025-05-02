function solution(num) {
  var answer = 0;

  //1이 될때까지 위에 계속 반복
  while (num !== 1 && answer <= 500) {
    if (num % 2 === 0) {
      //짝수면 2로 나눠서 num 재할당
      num = num / 2;
    } else {
      //3을 곱하고 1을 더해서 num 재할당
      num = num * 3 + 1;
    }
    answer += 1;
  }

  let result = num === 1 ? answer : -1;
  return result;
}