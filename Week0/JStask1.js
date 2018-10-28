var repeatNumbers = function(data) {
  // Put your solution here
  var num
  var len
  var result
  //console.log(data.length);
  result = ""
  for (var repeatA = 0; repeatA < data.length; repeatA++) {
    //console.log(data[repeatA]);
    num = data[repeatA][0];
    len = data[repeatA][1];
    //console.log(num + " " + len);
    result = result + " "
    for (var repeatB = 0; repeatB < len; repeatB++) {
        result = result + num
    }
  }
  console.log(result);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
