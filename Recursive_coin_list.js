function coins( val, arr = [], i = 3, temp = [0,0,0,0]){
  var ntemp = temp.slice(0);
  if (val >= 25 & i >= 3){
    ntemp[0] += 1;
    arr.concat(coins( val-25, arr, i = 3, ntemp));
    activate = true;
  }
  else if (val >= 10 & i >= 2){
    ntemp[1] += 1;
    arr.concat(coins( val-10, arr, i = 2, ntemp));
    activate = true;
  }
  else if (val >= 5 & i >= 1){
    ntemp[2] += 1;
    arr.concat(coins( val-5, arr, i = 1, ntemp));
    activate = true;
  }
  else if (val >= 1 & i >= 0){
    ntemp[3] += 1;
    arr.concat(coins( val-1, arr, i = 0, ntemp))
    activate = true;
  }
  if (i > 0 && val > 0){
    //console.log("i", i)
    arr.concat(coins( val, arr, i-1, temp));
  }
  if (val === 0){
    arr.push ({q: temp[0],d: temp[1],n: temp[2],p: temp[3]});
  }
  return arr;
}

console.log(coins(5, arr = [], i = 3, temp = [0,0,0,0]))
console.log(coins(6, arr = [], i = 3, temp = [0,0,0,0]))
console.log(coins(10, arr = [], i = 3, temp = [0,0,0,0]))
console.log(coins(20, arr = [], i = 3, temp = [0,0,0,0]))
console.log(coins(25, arr = [], i = 3, temp = [0,0,0,0]))
