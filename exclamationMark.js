//Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

//If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".


function balance(left,right){
    var leftweight = 0;
    var rightweight = 0;
    for(var i=0; i<left.length; i++){
      if(left[i]=="!"){
        leftweight +=2;
      }
      if(left[i]=="?"){
        leftweight +=3;
      }
    }
    for(var j=0; j<right.length; j++){
      if(right[j]=="!"){
        rightweight +=2;
      }
      if(right[j]=="?"){
        rightweight +=3;
      }
    }
    if(rightweight == leftweight){
      return "Balance";
    }
    if(rightweight > leftweight){
      return "Right";
    }
    else{
      return "Left";
    }
  
  }
  
  //Examples
  balance("!!","??") //=== "Right"
  //balance("!??","?!!") === "Left"
  //balance("!?!!","?!?") === "Left"
  //balance("!!???!????","??!!?!!!!!!!") === "Balance"
  