
  function solution(arr) {
    let x = [];
    arr.map((item) => {
      //x에 item 만큼 item 을 넣는다
      for (let i = 0; i < item; i++) {
        x.push(item);
      }
    });

    return x;
  }