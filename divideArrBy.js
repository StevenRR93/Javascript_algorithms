function divideArr(arr, num){
    return arr.map(function(element){
      return element /= num;
    });
  }
  
  console.log(divideArr([20, 25, 50, 75, 200, 187, 4], 5));