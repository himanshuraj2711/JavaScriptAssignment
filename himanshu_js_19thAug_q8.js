//finds the not repeating character in a passed in string.

function RepeatedChar(str) {
  var arra1 = str.split('');
  var result = '';
  var flag = 0;
 
  for (var i = 0; i < arra1.length; i++) {
    flag = 0;
 
    for (var j = 0; j < arra1.length; j++) 
    {
      if (arra1[i] === arra1[j]) {
        flag+= 1;
      }
    }
 
    if (flag < 2) {
      result = arra1[i];
      break;
    }
  }
  return result;
}
console.log(RepeatedChar('himanshu'));
