// function twoDimensional(row, column){
//   var arr = [];
//   var data = [];
//   for(var i=0; i<column; i++){
//     data.push(0);
//   }
//   for(var j=0; j<row; j++){
//     arr.push(data);
//   }

// console.log(arr);
// }

//twoDimensional(2,5) //to return [[0,0,0,0,0],[0,0,0,0,0]]

//twoDimensional(3,4) //to return [[0,0,0,0],[0,0,0,0],[0,0,0,0]]

//twoDimensional(1,5) //to return [[0,0,0,0,0]]

function twoDimensional(row, column){
  var arr = [];
  var topbottom = [];
  var middledata = [];
  for(var k=0; k<column; k++){
    topbottom.push(1);
  }

  arr.push(topbottom);

  for(var i=0; i<column; i++){
    if(i==0 || i==column-1){
      middledata.push(1);
    }
    if(i!=0 && i!=column-1){
      middledata.push(0);
    }
  }

  if(row > 2){
  for(var j=1; j<row-1; j++){
    arr.push(middledata);
  }
  }
  arr.push(topbottom);


return arr;
}

//twoDimensional(2,5) //to return [[1,1,1,1,1],[1,1,1,1,1]]

twoDimensional(5,5) //to return [[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]

//twoDimensional(8,8) //to return [[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1]]
