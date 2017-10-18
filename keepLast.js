function keepLast(str){
  var newstring = "";
  for (i = str.length-1; i >= 0; i--){
    if (i === str.lastIndexOf(str.charAt(i)) | str.charAt(i) === " "){
      newstring = str[i] + newstring;
    }
  }
  return newstring;
}

console.log(keepLast("This is a substring"));