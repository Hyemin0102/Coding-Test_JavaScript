function solution(cipher, code) {
    var answer = "";

    for(let i = 0; i < cipher.length; i++){
      if((i+1) % code === 0){
        answer += cipher[i]
      }
    }
    return answer;
  }

//cipher 문자열 길이만큼 순회 -> i자리+1 % code 나머지가 0 인 것 배열 합침