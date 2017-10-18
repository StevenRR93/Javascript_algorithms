function delsegof(word, i){
  if (word.length === 1){
    return "";
  }
  else if (i===0){
    aword = word.slice(1, word.length);
  }
  else if(i === word.length){
    aword = word.slice(0, word.length-1);
  }
  else{
    aword = word.slice(0, i) + word.slice(i+1, word.length);
  }
  return aword;
}

function anagrams(word, arr =[], temp = "", i = 0){
  if(word.length <= 1){
    arr.push(temp + word);
    return arr;
  }
  else if (i < word.length){
    ntemp = temp + word.charAt(i);
    nword = delsegof(word, i);
    arr.concat(anagrams(nword, arr, ntemp, 0));
    }
  if (i < word.length){
    arr.concat(anagrams(word, arr, temp, i+1));
  }
  return arr;
}

anagrams("cats", [],  "", 0 )