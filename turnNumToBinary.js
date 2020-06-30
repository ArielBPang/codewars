function binary (num){
  var bin = [128,64,32,16,8,4,2,1];
  var arr = [];
  for(var i =0; i<bin.length; i++){
    if(num>=bin[i]){
      arr.push(1);
      num -= bin[i];
    }
    else if(num<bin[i]){
      arr.push(0);
    }

  }

  answer = arr.join("");
  return answer;

}

binary(88);
