function solution(n) {
      var answer = 0;
  let array = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      array.push(i);
    }
  }

    answer = array.reduce(
    (a,c) => a+c,
    0
  )

  return answer;
}