  function solution(my_string, num1, num2) {
      let arr = my_string.split("");
      let aa = arr[num1]; //e
      arr[num1] = arr[num2] //l
      arr[num2] = aa //e
    return arr.join("");
  }
