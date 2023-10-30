function solution(array, height) {
    var num = 0;
    var newArr = array.filter(item => item > height)
    /*array.map(item=> {
        if(item > height){
            num += 1;
        } 
    })*/
    return newArr.length;
}

//map으로 배열 돌려서 height 보다 크면 1 추가
//filter로 height보다 큰 item만 찾아 새 배열 만들고 배열의 길이