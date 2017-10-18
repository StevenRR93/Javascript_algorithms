function productArr(arr){
    var sum = 0;
    arr.forEach(function(element){
      sum += element;
    });
    return sum;
  }

  console.log(productArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));