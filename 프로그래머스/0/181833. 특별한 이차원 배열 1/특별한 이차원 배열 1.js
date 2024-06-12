function solution(n) {
    let arr = []; // 빈 배열 생성  
    
   for(let i=0; i<n; i++){ //n개만큼
        arr[i] = new Array(n) //배열아이템에 새 배열 생성해서 이차원 배열 생성
        for(let j=0; j<arr[i].length; j++){
          if(i===j){
            arr[i][j] = 1
            } else {
            arr[i][j] = 0
            }   
        }
    }
    console.log('arr',arr)
    return arr;
}


//answer의 0번째배열의 0번째 인덱스 -> 1, 0번째 배열의 1번째 인덱스 -> 0, 0번째 배열의 2번째 인덱스 -> 0
//n의 길이만큼 배열 필요한데 무슨 배열이냐? n  만큼 반복해서 인덱스 비교