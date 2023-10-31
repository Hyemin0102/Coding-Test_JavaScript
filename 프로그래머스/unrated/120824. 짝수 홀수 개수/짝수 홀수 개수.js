function solution(num_list) {
    return [
        num_list.filter(item => (item % 2) === 0).length,
        num_list.filter(item => (item % 2) === 1).length,
    ]
}


/*function solution(num_list) {
    let num = 0; 
    num_list.map(item=>{
        if(item % 2 === 0) num++;
    })
    let num2 = num_list.length - num; 
    let answer = [num, num2];
    return answer;
}*/

/*
2로 나눴을 때 0인 것의 개수, 0이 아닌 것의 개수
*/