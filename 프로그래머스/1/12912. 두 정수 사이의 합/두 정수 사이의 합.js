function solution(a, b) {
  var answer = 0;

  //배열로 만들어서 내림차순 정렬 -> 큰 값-작은 값 구하고(예: 3), a부터 a+1, a+2, a+3, b 전체 합
  //3 , 3 은? 사이에 속한게 없어 -> 그냥 리턴
  //2, 5? 2 3 4 5 더함
  let desc = new Array(a, b).sort((a, b) => b - a);
  let bb = desc[0] - desc[1]; //차이

  if (bb !== 0) {
    for (let i = 1; i < bb; i++) {
      desc.push(desc[1] + i);
    }

    answer = desc.reduce((a, b) => a + b, 0);
  } else {
    answer = desc[0];
  }

  console.log(answer);
  return answer;
}