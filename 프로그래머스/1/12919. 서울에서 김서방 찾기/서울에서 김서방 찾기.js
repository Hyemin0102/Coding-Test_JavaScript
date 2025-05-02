function solution(seoul) {
  let searchKim = (el) => el.includes("Kim");
  let searchIndex = seoul.findIndex(searchKim);
  
  let answer = `김서방은 ${searchIndex}에 있다`;
  
  return answer;
}