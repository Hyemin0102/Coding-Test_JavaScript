function solution(emergency) {
    //배열 내림차순 -> 새 배열 생성
    let bb = [...emergency].sort(function(a,b){
      return b-a
    });
    
    let result = [];
    //내림차순한 배열로 인덱스 부여
    bb.forEach((item,index)=>{
      result.push([item,index+1])
    });

    /* result = [
        [76,1],
        [24,2],
        [3,3]
    ] */

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

//객체, 배열은 참조값으로 참조값이 데이터 자체는 별도의 메모리 공간에 저장되고 변수에 할당 시 데이터 값이 아닌
//데이터에 대한 메모리 공간의 주소가 저장됨!!! 참조값을 복사 하게 되면 두 변수는 같은 객체를 바라봄
// => 참조값은 복사해서 사용할 때 얕은 복사해서 사용해야함 + 이중배열 만들기도 배웠다
