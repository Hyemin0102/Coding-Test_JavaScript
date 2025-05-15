function solution(arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++){
            let sum = [];
        for(let j = 0; j < arr1[0].length; j++){
        
            sum.push(arr1[i][j] + arr2[i][j]); //sum 배열 여러개 만들고
        }
        
        answer.push(sum); //겉 배열에 sum 배열 반복 넣기 
    }
    return answer;
}