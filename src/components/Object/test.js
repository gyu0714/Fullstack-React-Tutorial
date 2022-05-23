function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

makeAdder();

// function makeAdder(x) {
//     var y = 1;
// }
