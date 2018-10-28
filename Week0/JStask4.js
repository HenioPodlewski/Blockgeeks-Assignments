var calculateChange = function(total, cash) {
  // Your code here
  var change = cash - total;
  var changeResultArr = {};
  console.log(change);

  if (change / 2000 >= 1 ) {
    changeResultArr["twenty"] = parseInt(change/2000);
    change = change - (2000 * (parseInt(change/2000)));
  }
  if (change / 1000 >= 1) {
    changeResultArr["ten"] = parseInt(change/1000);
    change = change - (1000 * (parseInt(change/1000)));
  }
  if (change / 500 >= 1) {
    changeResultArr["five"] = parseInt(change/500);
    change = change - (500 * (parseInt(change/500)));
  }
  if (change / 200 >= 1) {
    changeResultArr["twoDollar"] = parseInt(change/200);
    change = change - (200 * (parseInt(change/200)));
  }
  if (change / 100 >= 1) {
    changeResultArr["one"] = parseInt(change/100);
    change = change - (100 * (parseInt(change/100)));
  }
  if (change / 25 >= 1) {
    changeResultArr["quarter"] = parseInt(change/25);
    change = change - (25 * (parseInt(change/25)));
  }
  if (change / 10 >= 1) {
    changeResultArr["dime"] = parseInt(change/10);
    change = change - (10 * (parseInt(change/10)));
  }
  if (change / 5 >= 1) {
    changeResultArr["nickel"] = parseInt(change/5);
    change = change - (5 * (parseInt(change/5)));
  }
  if (change / 1 >= 1) {
    changeResultArr["penny"] = parseInt(change/1);
    change = change - (1 * (parseInt(change/1)));
  }
  console.log(changeResultArr);
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
