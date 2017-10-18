function badChar(str1, str2){
    if (str1.length < 1){
      return "";
    }
    else{
      if (str2.split("").indexOf(str1[0]) != -1){
        return "" + badChar(str1.slice(1, str1.length), str2);
      }
      else{
        console.log(str1.charAt(0));
        return str1[0] + badChar(str1.slice(1, str1.length), str2);
      }
    }
  }
  
  console.log(badChar("hello there friend", "eir"))