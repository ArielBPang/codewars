function presses(phrase) {
  var res = phrase.toUpperCase();
  var count = 0;
  for(var i =0; i<res.length; i++){
    if(res[i]=="7" || res[i]=="9"){
     count+=5; 
    }
    if(res[i]=="S" || res[i]=="Z" || res[i]=="2" || res[i]=="3" || res[i]=="4" || res[i]=="5" || res[i]=="6" || res[i]=="8"){
     count+=4; 
    }
    if(res[i]=="C" || res[i]=="O" || res[i]=="F" || res[i]=="R" || res[i]=="I" || res[i]=="V" || res[i]=="L" || res[i]=="Y"){
     count+=3; 
    }
    if(res[i]=="B" || res[i]=="N" || res[i]=="E" || res[i]=="Q" || res[i]=="H" || res[i]=="U" || res[i]=="K" || res[i]=="X"){
     count+=2; 
    }
    if(res[i]=="A" || res[i]=="M" || res[i]=="D" || res[i]=="P" || res[i]=="G" || res[i]=="T" || res[i]=="J" || res[i]=="W"){
     count+=1; 
    }
    if(res[i]=="0" || res[i]=="1" || res[i]==" "){
      count++;
    }
  }
  return count;
}

presses("WHERE DO U WANT 2 MEET L8R");


//using regular expression
function presses(phrase) {
  var sumpress = 0;
  for (var i = 0; i < phrase.length; i++)
  {
    switch (true)
    {
      case (/[1adgjmptw\s]/i.test(phrase[i])):
        sumpress++;
        break;
      case (/[behknqux0]/i.test(phrase[i])):
        sumpress += 2;
        break;
      case (/[cfilorvy]/i.test(phrase[i])):
        sumpress += 3;
        break;
      case (/[sz234568]/i.test(phrase[i])):
        sumpress += 4;
        break;
      case (/[79]/.test(phrase[i])):
        sumpress += 5;
        break;
      default:
        sumpress++;
        break;
    }
  }
  return sumpress;
}
