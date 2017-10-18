function removeEvenStr(arr){
    arr = arr.filter(function(element){
        return element.length % 2 > 0;
    });
    return arr;
  }
  
  console.log(removeEvenStr(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]))