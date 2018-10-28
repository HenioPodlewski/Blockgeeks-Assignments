var conditionalSum = function(values, condition) {
  // Your code here
  var num = 0
  var len = values.length;
  for (var repeat = 0; repeat < len; repeat++) {
    if (condition == "even" && values[repeat] % 2 == 0) {
      num = num + values[repeat] ;
      //console.log(values[repeat]);
    } else if (condition == "odd" && values[repeat] % 2 != 0){
      num = num + values[repeat] ;
      //console.log(values[repeat]);
    }
  }
  console.log(num)
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
