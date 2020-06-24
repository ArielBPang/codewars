function patrick(array){
  var pat = {};

  for(var i=0; i<array.length; i++){
    if(pat.hasOwnProperty(array[i])){
      pat[array[i]] ++;
    }
    else{
      pat[array[i]] = 1;
    }
  }
  return pat;
}

patrick(["love", "love", "love", "love", "looks", "looks", "hot", "hot", "hot", "baby"]);
