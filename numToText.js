function numToText(num, layer = 1){
  if (num >= 9007199254740991){
    return "error, too large of a number" // max int size, program fails to properly render past this point
  }
  if (num < 0){
    return "invalid number";
  }
  else if(num === 0){
    return "zero";
  }
  //console.log(num);
  num = Math.floor(num);
  var str = "";
  if (num < 1){
    return "";
  }
  if (layer % 3 === 0 & (num %10 !== 0)){
    str += "hundred ";
  }
  if( layer === 4 & (num %100 !== 0)){
    str += "thousand ";
  }
  else if (layer === 7){
    str += "million ";
  }
  else if (layer === 10){
    str += "billion ";
  }
  else if (layer === 13){
    str += "trillion ";
  }
  else if (layer === 15){
    str += "quadrillion ";
  }
  else if (layer === 18){
    str += "quintillion ";
  }
  
  
  var val = num % 10;
  
  //console.log(val);
  //console.log("layer, number: ",layer, num%100 > 9, num%100 < 20);
  if (layer % 3 === 1 & num%100 > 9 & num%100 < 20){
    //console.log(str);
    var newval = "";
    switch(num%100){
      case 10: newval = "ten ";
      break;
      case 11: newval = "eleven ";
      break;
      case 12: newval = "tweleve ";
      break;
      case 13: newval = "thirteen ";
      break;
      case 14: newval = "fourteen ";
      break;
      case 15: newval = "fifteen ";
      break;
      case 16: newval = "sixteen ";
      break;
      case 17: newval = "seventeen ";
      break;
      case 18: newval = "eighteen ";
      break;
      case 19: newval = "nineteen ";
      break;
    }
    return numToText(num/100, layer+2) + newval +str;
  }
  
  else if(layer % 3 === 2){
    //console.log(str);
    var newval = "";
      switch(num%10){
      case 0:
        break;
      case 2: 
        newval = "twenty ";
        break;
      case 3: 
        newval = "thirty ";
        break;
      case 4: 
        newval = "fourty ";
        break;
      case 5: 
        newval = "fifty ";
        break;
      case 6: 
        newval = "sixty ";
        break;
      case 7: 
        newval = "seventy ";
        break;
      case 8: 
        newval = "eighty ";
        break;
      case 9: 
        newval = "ninety ";
        break;
      }
      return numToText(num/10, layer+1)  + newval +str;
  }
  else {
    //console.log(str);
    var newval = "";
    switch(val){
      case 1: newval = "one ";
      break;
      case 2: newval = "two ";
      break;
      case 3: newval = "three ";
      break;
      case 4: newval = "four ";
      break;
      case 5: newval = "five ";
      break;
      case 6: newval = "six ";
      break;
      case 7: newval = "seven ";
      break;
      case 8: newval = "eight ";
      break;
      case 9: newval = "nine ";
      break;
      }
      return numToText(num/10, layer+1) + newval +str;
  }
}
console.log("-1: "+numToText(-1));
console.log("0: "+numToText(0));
console.log("10: "+numToText(10));
console.log("15: "+numToText(15));
console.log("100: "+numToText(100));
console.log("157: "+numToText(157));
console.log("1000: "+numToText(1000));
console.log("");
console.log("1001: "+numToText(1001));
console.log("");
console.log("10001: "+numToText(10001));
console.log("");
console.log("89439157: "+numToText(89439157));
console.log("");
console.log("1348198304193: "+numToText(1348198004193));
console.log("");
console.log("1348198300000: "+numToText(1348198000000));
console.log("");
console.log("1,348,198,304,193: "+numToText(1348198004193));
console.log("");
console.log("9,007,199,254,740,990: " + numToText(9007199254740990));
console.log("");
console.log("734019834750198347510983450394287: "+numToText(4019834750198347510983450394287));



