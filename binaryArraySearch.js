function binarySearch(arr, val){
  //console.log(arr);
  //console.log(Math.floor(arr.length/2) + " "+ arr[Math.floor(arr.length/2)]);
  if (arr.length <= 1 & val != arr[0]){
    return false;
  }
  else if(arr[Math.floor(arr.length/2)]===val){
    return true;
  }
  else if(Math.floor(arr[arr.length/2])<val){
    return binarySearch(arr.slice(Math.floor(arr.length/2), arr.length ), val);
  }
  else{
    return binarySearch(arr.slice(0, Math.floor(arr.length/2) ), val);
  }
}

console.log(binarySearch([1, 3, 7, 11, 15, 18, 19, 20, 22, 25, 26, 30, 33, 36, 39, 40], 36));
console.log(binarySearch([1, 3, 7, 11, 15, 18, 19, 20, 22, 25, 26, 30, 33, 36, 39, 40], 15));
console.log(binarySearch([1, 3, 7, 11, 15, 18, 19, 20, 22, 25, 26, 30, 33, 36, 39, 40], 40));
console.log(binarySearch([1, 3, 7, 11, 15, 18, 19, 20, 22, 25, 26, 30, 33, 36, 39, 40], 1));
console.log(binarySearch([1, 3, 7, 11, 15, 18, 19, 20, 22, 25, 26, 30, 33, 36, 39, 40], 5));
console.log(binarySearch([1, 3, 7, 11, 15, 18, 19, 20, 22, 25, 26, 30, 33, 36, 39, 40], 35));