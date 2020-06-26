//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

//For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

//The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

//Based on: http://oj.leetcode.com/problems/two-sum/

//twoSum [1, 2, 3] 4 === (0, 2)


// function twoSum(numbers, target) {
//   var arr = [];
//   var indexs = [];
  
//   for (var i = 0; i < numbers.length; i++){
//     console.log("iterating i: " + i);
//     if (arr[numbers[i]] != null){
//       var index = arr[numbers[i]];
//       indexs[0] = index;
//       indexs[1] = i;
//       break;
//     }
//     else{
//       console.log("inside else with i: " + i);
//       arr[target - numbers[i]] = i;
//       console.log("target: " + target);
//       console.log("numbers[i]: " + numbers[i]);
//       console.log("arr[target - numbers[i]]: " + arr[target - numbers[i]]);
//     }
//   }
//   return indexs;
// }


function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
      console.log("i: " + i);
        for (var j = i+1; j < numbers.length; j++) {
          console.log("i: " + i + " j: " + j);
            if (numbers[i] + numbers[j] === target){ 
              return [i, j];
            }
        }
    }
}
twoSum([1,2,3,4], 6);
