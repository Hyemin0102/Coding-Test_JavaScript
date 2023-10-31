function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1,num2 + 1);
    return answer;
}

//slice(n번째 인덱스부터, n번째 인덱스 전까지)