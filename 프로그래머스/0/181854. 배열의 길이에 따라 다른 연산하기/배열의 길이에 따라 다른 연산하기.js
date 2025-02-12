function solution(arr, n) {
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr.length % 2 === 0) {
        console.log("짝수 배열");
        //짝수 -> arr[i]가 홀수면 n 을 더하고 아니면 그대로 출력
        answer.push(i % 2 !== 0 ? arr[i] + n : arr[i]);
      } else {
        //홀수 -> 모든 짝수 인덱스에 n 을 더해
        console.log("홀수 배열");

        answer.push(i % 2 == 0 ? arr[i] + n : arr[i]);
      }
    }
    return answer;
  }
