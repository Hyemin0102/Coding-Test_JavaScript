function solution(array) {
    //내림차순
    let sortArr = array.sort((a,b)=>b-a)
    //배열길이 나누기 2 -> 정수구함 -> 그 정수에 해당하는 인덱스 값
    let index = Math.floor(sortArr.length / 2)
    
    return sortArr[index];
}

//배열의 가운데 자리 -> 5개면 3번째, 7개면 5번째