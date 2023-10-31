function solution(array) {
    var newArr = array.sort((a,b) => a - b);
    var middleIndex = Math.floor(newArr.length / 2);
    return newArr[middleIndex];
}
/*
배열의 갯수에서 나누기 2를 하면 중앙 자리의 index 구할 수 있음. 단, 정수여야 하므로 Math.floor
9개 아이템의 배열 중 중앙 자리는 5이고, 9를 2로 나눈 정수는 4. -> 4번째 인덱스(5번째 자리)
*/