function solution(numbers, direction) {
    let answer = [];
    
       for(let i=0; i<numbers.length; i++){
           if(direction === "right"){
               i === numbers.length -1 ? answer.splice(0,0,numbers[i]) :  answer.splice(i+1,0,numbers[i])
           } else {
               i === 0 ? answer.splice(numbers.length-1,0,numbers[i]) : answer.splice(i-1,0,numbers[i])
           }
       }
    

    // if(direction === "right") {
    //    for(let i=0; i<numbers.length; i++){
    //     if(i !== numbers.length -1 ){  //마지막 인덱스가 아니면 i+1해서 answer에 들어가
    //         answer.splice(i+1,0,numbers[i])
    //     } else { //마지막 인덱스면 answer의 0번째 인덱스로 들어가
    //          answer.splice(0,0,numbers[i])
    //     }
    //     }     
    // } else {
    //      for(let i=0; i<numbers.length; i++){
    //          if(i !== 0 ){
    //              //첫번째 인덱스가 아니면 -1
    //              answer.splice(i-1,0,numbers[i])
    //          } else {
    //              //첫번째 인덱스면 마지막으로
    //              answer.splice(numbers.length-1,0,numbers[i])
    //          }
    //      }
    // }
    return answer;
}

//direction이 right 면 원래 인덱스 +1, 마지막인덱스면 0번으로