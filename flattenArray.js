function flattenArray(arr){
  var newarr = [];
  for (var i in arr){
    //console.log(arr[i]);
    if (Array.isArray(arr[i])){
      newarr = newarr.concat(flattenArray(arr[i]));
    }
    else{
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

console.log(flattenArray([1,2,3, [4,5,6], 7, 8, 9, [10, 11, [12,13]]]));