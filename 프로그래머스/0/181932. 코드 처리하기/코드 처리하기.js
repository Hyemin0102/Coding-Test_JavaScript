  const solution = (code) => {
    let mode = 0;
    let ret = [];

    for (let i = 0; i < code.length; i++) {
      if (mode == 0) {
        code[i] == 1 ? (mode = 1) : i % 2 == 0 && ret.push(code[i]);
      } else {
        code[i] == 1 ? (mode = 0) : i % 2 !== 0 && ret.push(code[i]);
      }
    }

        return ret.length == 0 ? "EMPTY" : ret.join("");
  };