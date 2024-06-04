function solution(emergency) {
    //배열 내림차순 -> 새 배열 생성
    let copy = JSON.parse(JSON.stringify(emergency))
    let bb = copy.sort(function(a,b){
      return b-a
    });
    
    let result = [];
    //내림차순한 배열로 인덱스 부여
    bb.forEach((item,index)=>{
      result.push([item,index+1])
    });

    let test = [];
    emergency.forEach(item => {
        //이중배열 중 원래 배열의 0번째 인덱스와 맞는값 찾아서 1번째 인덱스 출력
      let dd = result.find(arr => arr[0] === item );
      if (dd) {
        test.push(dd[1])
      }
    })
    
    return test;
}