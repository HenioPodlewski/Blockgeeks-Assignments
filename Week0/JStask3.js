var talkingCalendar = function(date) {
  // Your code here
  var months = ["","January ","February ","March ", "April ","May ","June ","July ","August ","September ","October ","Novemeber ","December "];
  var dateArr = date.split("/");
  var dateResult;
  var monthNum = parseInt(dateArr[1]);
  //console.log(dateArr);
  dateResult = months[monthNum] + parseInt(dateArr[2]);
  if (dateArr[2].substr(0, 2) == "01") {
    dateResult = dateResult + "st" ;
  } else if (dateArr[2].substr(1, 1) == "2"){
    dateResult = dateResult + "nd" ;
  } else if (dateArr[2].substr(1, 1) == "3"){
    dateResult = dateResult + "rd" ;
  } else if (dateArr[2].substr(0, 2) == "11"){
    dateResult = dateResult + "th" ;
  } else if (dateArr[2].substr(0, 2) == "21"){
    dateResult = dateResult + "st" ;
  } else {
    dateResult = dateResult + "th" ;
  }
  dateResult = dateResult + ", " + dateArr[0] ;
  console.log(dateResult);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
