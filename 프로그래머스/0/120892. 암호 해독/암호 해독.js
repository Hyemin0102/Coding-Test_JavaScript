function solution(cipher, code) {
    let cipherArr = [...cipher]; //문자열 -> 배열로
    let answer = [];
    for(let i=0; i<cipherArr.length; i++){ //cipherArr의 0번째 아이템부터 순회
        if((i+1) % code === 0){ //0 나누기 4는 0 -> i에 1 더해서 자리 찾기
            answer.push(cipherArr[i])
        }
    }

    return answer.join("");
}

//code의 배수열 찾아서 그 값들만 새 배열로 출력
//cipher 순회 -> code 나눠서 나머지 0인거 찾음 -> 0번째 인덱스는 무조건 0으로 나옴