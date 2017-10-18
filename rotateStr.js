function rotateString(str, num){
    return str.substring(num, str.length) + str.substring(0,num);
  }
  
  console.log(rotateString("This is a string with alphabetic characters", 10));