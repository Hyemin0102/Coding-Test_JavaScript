function solution(s) {
  var answer = "";
  let arr = [...s];
  let midIndex = arr.length / 2;

  if (arr.length % 2 === 0) {
    answer = s.substring(midIndex - 1, midIndex + 1);
  } else {
    answer = s.substring(midIndex, midIndex + 1);
  }

  return answer;
}