function solution(s) {
  var answer = "";
  let arr = [...s];
  let halfInd = arr.length / 2;

  if (arr.length % 2 === 0) {
    answer = arr.slice(halfInd - 1, halfInd + 1);
  } else {
    answer = arr.slice(halfInd, halfInd + 1);
  }
    
  return answer.join('');
}