function solution(my_string) {
    var sum = 0;
    
    [...my_string].map(item=> {
        if(Number(item)) sum+=Number(item)
    })
    
    return sum;
}

/*
문자열 배열 아이템으로 다 나누고 그 중 숫자만 구해서 값 더하기 , 숫자인것만
*/