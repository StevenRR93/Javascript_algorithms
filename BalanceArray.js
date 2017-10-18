function BalancePoint(arr){
	var x = 0;
	var y = 0;
  var xtemp = arr[0];
  var ytemp = arr[arr.length-1];
	for (var i = 1; i < arr.length-1; i++){
  	if (i === arr.length -2 && xtemp === ytemp){
  	  console.log(xtemp, ytemp);
    	return true;
    }
  	else if (xtemp < ytemp || (xtemp === ytemp && arr[x+1] < arr[arr.length-y-1])){
    	x++;
      xtemp += arr[x];
    }
    else{
    	y++;
      ytemp += arr[arr.length-y-1];
    }
  }
  console.log(xtemp, ytemp);
  if (xtemp != ytemp){
  	return false;
  }
  return true;
}

console.log(BalancePoint([1, 2, 3, 4, 10]));
console.log(BalancePoint([12, 3, 4, 10]));
console.log(BalancePoint([12, 3, 4, 10, 1]));
console.log(BalancePoint([6, 8, 12, 26]));
console.log(BalancePoint([1,2,3,4,5,4,3,2,1]));

function BalanceIndex(arr){
	var x = 0;
	var y = 0;
  var xtemp = arr[0];
  var ytemp = arr[arr.length-1];
	for (var i = 1; i < arr.length-1; i++){
  	if (i === arr.length-2 && xtemp === ytemp){
    	return arr[x+1];
    }
  	else if (xtemp < ytemp || (xtemp === ytemp && arr[x+1] < arr[arr.length-y-1])){
    	x++;
      xtemp += arr[x];
    }
    else{
    	y++;
      ytemp += arr[arr.length-y-1];
    }
  }
  return false;
}

console.log(BalanceIndex([1, 2, 3, 4, 10]));
console.log(BalanceIndex([12, 3, 4, 10]));
console.log(BalanceIndex([12, 3, 4, 10, 1]));
console.log(BalanceIndex([6, 8, 12, 26]));
console.log(BalanceIndex([1,2,3,4,5,4,3,2,1]));