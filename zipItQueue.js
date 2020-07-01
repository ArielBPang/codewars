function zipIt(arr1,arr2){
  var newarr = [];
  for(var i=0; i<arr1.length; i++){
    newarr.push(arr1[i]);
  }
  for(var j=0; j<arr2.length; j++){
    console.log("hey! newarr is currently: " + newarr + " ---j is at: " + j+ " ---with arr2 value of: " + arr2[j]);
    newarr.splice(j+j+1,0,arr2[j]);
  }
  return newarr;
}

//zipIt([1,2], [10,20,30,40 ]) //to return [1,10,2,20,30,40]

//zipIt([1,2,3,4], [10,20 ]) //to return [1,10,2,20,3,4]

zipIt([1,2,3,4], [10,20,30,40 ]) //to return [1,10,2,20,3,30,4,40]

//zipIt([1], [10,20 ]) //to return [1,10,20]

//zipIt([1,2,3], [10 ]) //to return [1,10,2,3]
