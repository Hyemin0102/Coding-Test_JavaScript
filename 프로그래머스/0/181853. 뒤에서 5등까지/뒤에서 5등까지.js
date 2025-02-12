 const solution = (num_list) => {
    let ascArray = num_list.sort(function (a, b) {
      return a - b;
    });

    let result = ascArray.slice(0, 5);

    return result;
  };