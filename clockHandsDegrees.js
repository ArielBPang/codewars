function clockHands(seconds){
  if(seconds%3600==0){
    var hourdegree = Math.round(seconds/120);
    var minutedegree = 0;
    var secondsdegree = 0;
  }
  if(seconds%3600!=0){
    hourdegree = Math.round(seconds/120);
    while(hourdegree>360){
      hourdegree -= 360;
    }
    var n = seconds/3600;
    var minutedecimal = n - Math.floor(n);
    minutedegree = Math.round(minutedecimal*360);

    var x = minutedecimal*60;
    var secondsdecimal = x - Math.floor(x);
    secondsdegree = Math.round(secondsdecimal*360);
  }
  var arr =[hourdegree, minutedegree, secondsdegree];
return arr;

}

// clockHands(3600);
// clockHands(10800);
// clockHands(5000);
// clockHands(8000);
clockHands(50000);
