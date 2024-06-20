function solution(n, arr1, arr2) {
    var answer1 = [];
    var answer2 = [];

    for(let i=0; i<n; i++){
        answer1.push(arr1[i].toString(2).padStart(n,'0'));
        answer2.push(arr2[i].toString(2).padStart(n,'0'));
    }

    let result = [];
    let string = ""
     
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(answer1[i][j] == 1 || answer2[i][j] == 1){
                string += "#"
            } else {
                string += " "
            }
        }
    }  
    
    for(let a=0; a<string.length; a+=n) {
            result.push(string.slice(a,a+n));
        }
    
    return result;
}

//지도1, 지도2의 공백은 0, 벽은 1 -> arr1 의 정수를 10진수에서 2진수로 바꾸면 지도의 공백과 벽 알 수 있음
//지도1, 지도2 둘 중 하나라도 벽이면 벽(#), 둘 다 벽 아니면 공백

/* 
function solution(n, arr1, arr2) {
    var answer1 = [];
    var answer2 = [];
    //arr1, arr2의 길이는 n개
    //arr를 n만큼 순회하면서 2진법으로 바꿔 -> n자리가 되야하고 빈 값은 0으로 채움
    for(let i=0; i<n; i++){
        answer1.push(arr1[i].toString(2).padStart(n,'0'));
        answer2.push(arr2[i].toString(2).padStart(n,'0'));
    }
    //console.log(answer1,answer2)

    //최종 지도를 담을 배열 생성
    let result = [];
     let string = ""
     
    //result배열안에 스트링을 집어넣어
    
    //answer1,answer2 두개의 이중 배열을 비교
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            // console.log('answer1',answer1[i][j])
            // console.log('answer2',answer2[i][j])
            //1배열[0][0], 2배열[0][0]비교
            //1배열[0][1], 2배열[0][1]비교
            //같은 자리 출력값 중 1이 있으면 1 아니면 0 ->result[0][0]에 값 넣어
                if(answer1[i][j] == 1 || answer2[i][j] == 1){
                    string += "#"
                } else {
                    string += " "
                }
            }
        }  
    
    //console.log('string',string)
    //string 을 n자리씩 잘라서 배열에 넣어야함
        for(let a=0; a<string.length; a+=n) {
                    result.push(string.slice(a,a+n));

                    }
    
    return result;
}

//지도1, 지도2의 공백은 0, 벽은 1 -> arr1 의 정수를 10진수에서 2진수로 바꾸면 지도의 공백과 벽 알 수 있음
//지도1, 지도2 둘 중 하나라도 벽이면 벽(#), 둘 다 벽 아니면 공백
*/

