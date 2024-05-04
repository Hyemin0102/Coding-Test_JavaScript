function solution(array) {
    let answer = [];
    const isMaxNumber = (el) => el === Math.max(...array); //8과 같은 자리

    answer.push( Math.max(...array), array.findIndex(isMaxNumber))
    return answer;
}

//배열 중 가장 큰 수, 인덱스 찾아서 배열에
//가장 큰 수 찾기, array 아이템 한개씩 비교해서 더 큰 수만 남도록
