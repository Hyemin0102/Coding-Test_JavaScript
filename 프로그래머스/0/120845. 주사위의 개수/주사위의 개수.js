  function solution(box, n) {
    let aa = parseInt(box[0]/n);
    let bb = parseInt(box[1]/n);
    let cc = parseInt(box[2]/n);
    return aa * bb * cc;
  }


//가로, 세로, 높이 배열인 box
//주사위 모서리 길이 n
//상자에 최대 몇개의 주사위?
//가로길이/n 세로길이/n 높이/n