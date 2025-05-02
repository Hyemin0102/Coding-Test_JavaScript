function solution(arr, divisor) {
  let array = [];
  //arr[i] 중 divisor로 나눠서 몫이 0인것보다 큰 값만 배열에 남기고 오름차순으로
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % divisor === 0) {
      array.push(arr[i]);
    }
  }

  if (array.length === 0) {
    array.push(-1);
  } else {
    array.sort((a, b) => a - b);
  }
  console.log(array);
  return array;
}