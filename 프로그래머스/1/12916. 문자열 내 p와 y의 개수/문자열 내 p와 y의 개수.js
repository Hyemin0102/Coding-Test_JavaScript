function solution(s){
  var answer = true;
  let string = s.toUpperCase();
  let p = 0;
  let y = 0;

  //p, y 갯수 구하기
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === "P") {
      p += 1;
    } else if (string[i] === "Y") {
      y += 1;
    }
  }

  answer = p === y ? true : false;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}