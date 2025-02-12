  function solution(arr1, arr2) {
    var answer = 0;
    let length1 = arr1.length;
    let length2 = arr2.length;

    if (length1 !== length2) {
      //두 수 비교 length1이 크면 1, length2가 크면 -1,
      answer = length1 > length2 ? 1 : -1;
    } else {
      //길이가 같다면 합 더해
      let sum1 = arr1.reduce((a, b) => {
        return a + b;
      }, 0);
      let sum2 = arr2.reduce((a, b) => {
        return a + b;
      }, 0);
      //같을 때 조건 추가
      answer = sum1 > sum2 ? 1 : sum1 === sum2 ? 0 : -1;
    }

    return answer;
  }