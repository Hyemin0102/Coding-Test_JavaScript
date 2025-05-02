function solution(phone_number) {
  let aa = [];
  let arr = phone_number.split("");
  let endNumber = arr.slice(-4);
  for (let i = 0; i <= phone_number.length - 5; i++) {
    aa.push(arr[i].replace(/[0-9]/g, "*"));
  }
  
  let answer = aa.concat(endNumber).join("");
  
  return answer;
}