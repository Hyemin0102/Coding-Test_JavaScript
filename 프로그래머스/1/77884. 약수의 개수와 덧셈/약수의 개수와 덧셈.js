
function solution(left, right) {
  var answer = 0;
  let aa = right - left;

  //left에서 right까지 돌면서 각 수의 약수 갯수 찾음. 나눴을때 0이 되는거
  for (let i = left; i <= right; i++) {
    let count = 0; //count를 for문 안에 넣어서 각 i마다 적용되게

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        //j가 i의 약수인 경우
        count++;
      }
    }

    if (count % 2 === 0) {
      answer += i; //짝수면 값 더하기
    } else {
      answer -= i;
    }
  }

  return answer;
}