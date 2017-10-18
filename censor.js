function min(arr){
  var min = arr[0].length;
  arr.forEach(function(element){
    if (min > element.length){
      min = element.length;
    }
  });
  return min;
}

function max(arr){
  var max = arr[0].length;
  arr.forEach(function(element){
    if (max < element.length){
      max = element.length;
    }
  });
  return max;
}

console.log(max(["asdf", "salkdjf;", "a", "qowie"]));
console.log(min(["asdf", "salkdjf;", "a", "qowie"]));

function censor(string, arr){
  string = string.toLowerCase();
  if (string.length < min(arr)){
    return string;
  }
  else{
    for (i = min(arr); i <= max(arr); i++){
      if ( arr.indexOf(string.slice(0, i)) != - 1){
        newstring = "";
        for (j = 0; j < i; j++){
          newstring += "*";
        }
        return newstring + censor(string.slice(i, string.length), arr);
      }
    }
      return string[0] + censor(string.slice(1, string.length), arr);
  }
}

console.log(censor("Hello there friend", ["hell", "here"], ""));
console.log(censor("The quick brown fox jumps over the lazy dog who is not going to this function", ["fox", "dog", "is", "not", "function"], ""));