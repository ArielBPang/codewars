function parensValid(str){
  var open = "(";
  var close = ")";
  var count = 0;
  for(var i=0; i<str.length; i++){
    if(str[i]==open){
      count++;
    }
    if(str[i]==close){
      count--;
    }
    if(count<0){
      return false;
    }
  }
  if(count !=0){
    return false;
  }
  return true;
}


//parensValid("Y(3(p)p(3)r)s"); //to return true

//parensValid("N(0)t )0(k"); //to return false

//parensValid("N(0)t (0(k))"); //to return true

parensValid("(N(0)t (0(k))"); //to return false

//parensValid("()(N(0)t (0(k)))"); //to return true
